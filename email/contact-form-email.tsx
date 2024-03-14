// import React from "react";
// import {
//   Html,
//   Heading,
//   Hr,
//   Container,
//   Preview,
//   Section,
//   Text,
// } from "@react-email/components";
// import { Tailwind } from "@react-email/tailwind";
// // eslint-disable-next-line @next/next/no-document-import-in-page
// import { Head } from "next/document";

// type ContactFormEmailProps = {
//   message: string;
//   senderEmail: string;
// };

// export default function ContactFormEmail({
//   message,
//   senderEmail,
// }: ContactFormEmailProps) {
//   return (
//     <Html>
//       <Head />
//       <Preview>New message from your portfolio site</Preview>
//       <Tailwind>
//         <body className="bg-gray-100 text-black">
//           <Container>
//             <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
//               <Heading className="leading-tight">
//                 You received the following message from the contact form
//               </Heading>
//               <Text>{message}</Text>
//               <Hr />
//               <Text>The sender's email is: {senderEmail}</Text>
//             </Section>
//           </Container>
//         </body>
//       </Tailwind>
//     </Html>
//   );
// }
