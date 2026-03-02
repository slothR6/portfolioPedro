import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Nome precisa ter ao menos 2 caracteres.'),
  email: z.string().email('Email inválido.'),
  message: z.string().min(10, 'Mensagem precisa ter ao menos 10 caracteres.'),
});

export async function POST(request: Request): Promise<NextResponse> {
  const json = (await request.json()) as unknown;
  const parsed = contactSchema.safeParse(json);

  if (!parsed.success) {
    return NextResponse.json({ message: parsed.error.issues[0]?.message ?? 'Dados inválidos.' }, { status: 400 });
  }

  const { name, email, message } = parsed.data;

  // Placeholder de integração real (exemplo com nodemailer):
  // await transporter.sendMail({ from: email, to: 'you@domain.com', subject: `Contato de ${name}`, text: message });
  console.log('Mensagem recebida', { name, email, message });

  return NextResponse.json({ message: 'Mensagem enviada com sucesso. Retornarei em breve.' }, { status: 200 });
}
