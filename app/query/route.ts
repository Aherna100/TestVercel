import postgres from 'postgres';
import bcrypt from 'bcryptjs';
const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

async function listInvoices() {
	// const data = await sql`
  //   SELECT invoices.amount, customers.name
  //   FROM invoices
  //   JOIN customers ON invoices.customer_id = customers.id
  //   WHERE invoices.amount = 666;
  // `;
  const hashedPassword = await bcrypt.hash('123456', 10);
  // const data = await sql`
  //   SELECT * FROM invoices
  // `;
  const data = await sql`
    INSERT INTO users (id, name, email, password)
    VALUES ('410544b2-4001-4271-9855-fec4b6a6442a', 'User', 'user@nextmail.com', ${hashedPassword});
`;
  // const data = await sql`
  //   DROP DB supabase-rose-island 
  // `;

	return data;
}

export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  try {
  	return Response.json(await listInvoices());
  } catch (error) {
  	return Response.json({ error }, { status: 500 });
  }
}
