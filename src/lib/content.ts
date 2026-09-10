/**
 * Page copy shared by the production pages and the design-lab variants.
 *
 * Keeping it here means a concept and the live page can never drift apart:
 * the variants differ in composition only, never in what they say.
 */
import { photos } from "./images";

export const services = [
  {
    title: "Marriage Counselling",
    photo: photos.marriage,
    whoFor:
      "For couples at any stage of their marriage who want to strengthen their relationship, resolve conflicts, or improve communication.",
    whatToExpect:
      "In marriage counselling, you and your partner will work with Gabriel in a safe, non-judgmental space. Sessions focus on improving communication patterns, rebuilding trust, deepening emotional intimacy, and developing practical tools for a healthier relationship. Each session lasts 60 minutes and can be conducted online via Google Meet or in person at our Ikeja office.",
  },
  {
    title: "Family Counselling",
    photo: photos.family,
    whoFor:
      "For families navigating challenges such as communication breakdowns, behavioural issues, grief, transitions, or conflict between family members.",
    whatToExpect:
      "Family counselling provides a safe space for all family members to express themselves and be heard. Gabriel helps families identify unhealthy patterns, improve communication, and develop stronger bonds. Sessions are 60 minutes and can be held online or in person, depending on your family’s needs.",
  },
  {
    title: "Premarital Counselling",
    photo: photos.premarital,
    whoFor:
      "For couples preparing for marriage who want to build a strong foundation before saying ‘I do’.",
    whatToExpect:
      "Premarital counselling helps couples explore important topics such as expectations, communication styles, finances, family planning, roles, and conflict resolution. Gabriel provides practical tools and honest conversations that prepare you for a successful marriage. Sessions are 60 minutes, available online or in person.",
  },
  {
    title: "Faith-Based Counselling",
    photo: photos.faith,
    whoFor:
      "For individuals, couples, or families who desire a faith-sensitive approach to their mental health and relationship journey.",
    whatToExpect:
      "Faith-based counselling integrates professional counselling principles with Christian values and spiritual insights. Gabriel respectfully incorporates faith into the therapeutic process for those who desire it. This approach is available for all services and can be conducted online or in person.",
  },
  {
    title: "Anxiety & Depression Counselling",
    photo: photos.anxietyDepression,
    whoFor:
      "For individuals whose thoughts, emotions, relationships, work, sleep, faith, or daily functioning are being affected by anxiety or depression.",
    whatToExpect:
      "Our counselling service provides a safe, confidential, and supportive space where clients can explore what they are experiencing. The goal is to help clients regain emotional stability, improve self-awareness, strengthen resilience, and take practical steps toward recovery. Where symptoms are severe or require medical attention, we also support appropriate referral to qualified healthcare professionals.",
  },
  {
    title: "Addiction Recovery Counselling",
    photo: photos.addictionRecovery,
    whoFor:
      "For individuals seeking freedom from substances, habits, or behaviours that have begun to control their choices, relationships, health, finances, work, or spiritual wellbeing.",
    whatToExpect:
      "Our addiction recovery counselling provides structured, compassionate, and non-judgmental support for individuals seeking freedom from harmful patterns. We help clients identify triggers and the roots of addiction, and build relapse-prevention strategies. Where specialist medical, psychiatric, or rehabilitation support is needed, we work with the client to pursue appropriate referral and coordinated care.",
  },
  {
    title: "Online Counselling",
    photo: photos.online,
    whoFor:
      "For individuals, couples, or families who prefer the convenience of remote sessions from their home or any location.",
    whatToExpect:
      "Online counselling provides the same quality of professional support as in-person sessions, conducted via secure video conferencing (Google Meet). This option offers flexibility for busy schedules, those with mobility challenges, or anyone who prefers the comfort of their own space. Sessions are 60 minutes.",
  },
];

export const sessionFacts = [
  { k: "60 minutes", v: "The length of every session, for every service." },
  {
    k: "Online or in person",
    v: "Secure video via Google Meet, or at the Ikeja office.",
  },
  {
    k: "Free intro call",
    v: "A complimentary 15-minute discovery call before you commit.",
  },
];

export const bookingSteps = [
  {
    title: "Send a WhatsApp message",
    description:
      'Use the "Book on WhatsApp" button to send a message to New Horizon Counselling Service. Introduce yourself and share a brief reason for seeking counselling.',
  },
  {
    title: "Free intro call",
    description:
      "Gabriel will respond personally and schedule a complimentary 15-minute discovery call. This is an opportunity to discuss your needs and ask any questions before committing to regular sessions.",
  },
  {
    title: "Book your session",
    description:
      "After your intro call, you can book your first session. Gabriel will share available times, session fees, and bank transfer details. Payment happens outside the website via bank transfer.",
  },
];

export const bookingNotes = [
  {
    k: "No payment on the website",
    v: "Payment is handled via bank transfer after booking. This site never collects card or account details.",
  },
  {
    k: "Free intro call",
    v: "A complimentary 15-minute discovery call is available before your first paid session.",
  },
  {
    k: "Cancellation policy",
    v: "Kindly give at least 24 hours’ notice to reschedule or cancel a session.",
  },
];

export const bookingFaqs = [
  {
    question: "How long is each session?",
    answer: "Each session lasts 60 minutes.",
  },
  {
    question: "Where are sessions held?",
    answer:
      "Sessions are available online via Google Meet or in person at our office in Ikeja, Lagos.",
  },
  {
    question: "Is there a free consultation?",
    answer:
      "Yes, we offer a complimentary 15-minute intro call to discuss your needs before booking your first session.",
  },
  {
    question: "How do I pay?",
    answer:
      "Payment is made via bank transfer after you book your session. Gabriel will share the session fee and bank details during your booking conversation.",
  },
];

export const faqGroups = [
  {
    label: "Sessions",
    items: [
      {
        question: "What should I expect in my first session?",
        answer:
          "In your first session, we will get to know each other and discuss your reasons for seeking counselling or mentoring. This initial meeting is an opportunity for you to share your concerns and goals. We will also go over the structure of our sessions, confidentiality, and any other questions you may have. This helps create a safe and comfortable environment for your journey.",
      },
      {
        question: "How long does therapy take?",
        answer:
          "Each session usually lasts one hour. The duration of therapy varies depending on individual needs and goals. Some people may benefit from a few sessions, while others may require a more extended period. During our initial meetings, we can discuss your specific situation and develop a tailored plan that suits you best. Our goal is to ensure you receive the support you need at your own pace.",
      },
      {
        question: "Is therapy confidential?",
        answer:
          "Yes, therapy sessions are confidential. Your privacy is of utmost importance, and all information shared during our sessions is kept strictly confidential. The details of exceptions will be discussed during the session.",
      },
      {
        question: "Do you offer online sessions?",
        answer:
          "Yes, we offer online sessions for both counselling and mentoring. This allows you to receive support from the comfort of your home or any location that is convenient for you. Online sessions are conducted via secure video conferencing platforms to ensure your privacy and confidentiality.",
      },
    ],
  },
  {
    label: "Booking & fees",
    items: [
      {
        question: "What are your fees?",
        answer:
          "Our session fees are shared during the booking process. Payment is made via bank transfer after you book your session. We offer a free 15-minute intro call so you can learn more about our services before committing.",
      },
      {
        question: "How do I book a session?",
        answer:
          "Booking is simple. Send us a message on WhatsApp and we’ll guide you through the process. You can also visit our Book a Session page for more details.",
      },
      {
        question: "What is your cancellation policy?",
        answer:
          "We kindly ask for at least 24 hours’ notice to reschedule or cancel a session. This allows us to better serve all our clients.",
      },
    ],
  },
  {
    label: "Approach",
    items: [
      {
        question: "Do you offer faith-based counselling?",
        answer:
          "Yes, we clearly offer faith-based counselling as an option. Our approach is warm, ethical, practical, and integrative, drawing from sound counselling principles while respectfully incorporating Christian values where clients desire a faith-based process.",
      },
    ],
  },
];

export const aboutProfile = [
  "Gabriel Ajibade is a pastor, certified counsellor, Mental Health Therapist, marriage and family life counsellor, mentor, and counselling educator. He brings together pastoral wisdom, professional counselling training, and years of practical experience in supporting individuals, couples, families, leaders, and faith communities.",
  "He holds a Master’s degree in Theology with specialization in Leadership, a Master’s degree in Mental Health Counselling, and an Advanced Diploma in Marriage Counselling, and has received professional training in family counselling, cognitive behavioural therapy, psychotherapy, marriage counselling, mentoring, and pastoral care. He is also actively involved in counselling education and supervision, helping to train and guide emerging counsellors in ethical and competent practice.",
  "His professional memberships include the Counselling Association of Nigeria and the Africa Network of Professional Counsellors. He has also served in leadership, academic, supervisory, and mentoring capacities within counselling, ministry, and training institutions.",
];

export const aboutCredentials = [
  "Master’s degree in Theology with specialization in Leadership",
  "Master’s degree in Mental Health Counselling",
  "Advanced Diploma in Marriage Counselling",
  "Professional training in family counselling",
  "Professional training in cognitive behavioural therapy",
  "Professional training in psychotherapy",
  "Professional training in mentoring and pastoral care",
];

export const aboutMemberships = [
  "Counselling Association of Nigeria",
  "Africa Network of Professional Counsellors",
];

export const aboutAreas = [
  "Marriage and family counselling",
  "Premarital counselling",
  "Relationship counselling",
  "Emotional wellness",
  "Faith-based counselling",
  "Mental health support",
  "Pastoral counselling",
  "Mentoring",
  "Personal development",
  "Trauma-sensitive support",
  "Parenting guidance",
  "Leadership development",
];

export const officeHours = [
  { day: "Monday to Friday", time: "9:00 AM to 5:00 PM" },
  { day: "Saturday", time: "By appointment" },
  { day: "Sunday", time: "Closed" },
];

/** URL-safe anchor for each service section. */
export function slugify(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
