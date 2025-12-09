import { Resend } from "resend";
const resend_email = new Resend(process.env.RESEND_API_KEY);
export default resend_email;