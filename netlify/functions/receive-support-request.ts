import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'eric@ericphiferllc.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function handler(event: {
  httpMethod: string;
  headers: Record<string, string>;
  body: string | null;
}) {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization, Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers: corsHeaders, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: corsHeaders, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { subject, message, clientName, clientDomain, timestamp } = JSON.parse(event.body || '{}');

    if (!subject || !message) {
      return { statusCode: 400, headers: corsHeaders, body: JSON.stringify({ error: 'Subject and message are required.' }) };
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `[Support] ${escapeHtml(subject)} — ${clientName || 'Dashboard'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0e7490; margin-bottom: 24px;">Dashboard Support Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #4b5563; vertical-align: top; width: 100px;">Client</td>
              <td style="padding: 8px 12px; color: #1f2937;">${escapeHtml(clientName || 'Unknown')}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #4b5563; vertical-align: top;">Domain</td>
              <td style="padding: 8px 12px; color: #1f2937;">${escapeHtml(clientDomain || 'Unknown')}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #4b5563; vertical-align: top;">Subject</td>
              <td style="padding: 8px 12px; color: #1f2937;">${escapeHtml(subject)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #4b5563; vertical-align: top;">Message</td>
              <td style="padding: 8px 12px; color: #1f2937; white-space: pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 24px 0;" />
          <p style="font-size: 12px; color: #9ca3af;">Sent from the ${escapeHtml(clientName || '')} dashboard at ${escapeHtml(timestamp || new Date().toISOString())}</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'Failed to send support request.' }) };
    }

    return { statusCode: 200, headers: corsHeaders, body: JSON.stringify({ success: true }) };
  } catch (err) {
    console.error('Support request error:', err);
    return { statusCode: 500, headers: corsHeaders, body: JSON.stringify({ error: 'An unexpected error occurred.' }) };
  }
}
