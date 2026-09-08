import { photos, type Photo } from "./images";

export interface Article {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  cover: Photo;
  content: string;
}

/**
 * Single source of truth for articles, shared by the listing page, the
 * article page, and the home-page teaser. Swap this module for the CMS
 * client when Sanity is wired up — the page components need not change.
 */
export const articles: Article[] = [
  {
    slug: "5-conversations-to-have-before-you-marry",
    cover: photos.couples,
    excerpt:
      "Before saying ‘I do,’ these five essential conversations can help you and your partner build a stronger, more understanding foundation for your marriage.",
    title: "5 Conversations to Have Before You Marry",
    category: "Premarital",
    content: `
      <p>Before saying “I do,” these five essential conversations can help you and your partner build a stronger, more understanding foundation for your marriage.</p>
      
      <h2>1. Finances and Money Management</h2>
      <p>Money is one of the leading causes of conflict in marriage. Before you marry, discuss your financial habits, debts, savings goals, and how you’ll manage shared expenses. Be honest about your financial situation and create a plan together.</p>
      
      <h2>2. Family Planning and Parenting</h2>
      <p>Do you want children? How many? When? What are your views on parenting styles? These are crucial questions to discuss before marriage. Differences in family planning can create significant challenges if not addressed early.</p>
      
      <h2>3. Roles and Expectations</h2>
      <p>What are your expectations for household responsibilities, career priorities, and family roles? Discuss how you’ll divide tasks and support each other’s goals and ambitions.</p>
      
      <h2>4. Conflict Resolution</h2>
      <p>Every couple disagrees. The key is how you handle those disagreements. Discuss your conflict styles and agree on healthy ways to resolve disputes. Consider learning techniques like active listening and “I” statements.</p>
      
      <h2>5. Faith and Values</h2>
      <p>If faith is important to you, discuss how it will shape your marriage. What role will spirituality play in your daily life? How will you handle differences in religious beliefs or practices?</p>
      
      <p>These conversations might feel uncomfortable, but they’re essential for building a strong marriage foundation. Consider premarital counselling to help guide these discussions in a safe, structured environment.</p>
    `,
  },
  {
    slug: "when-marriage-feels-like-routine-reconnecting-as-a-couple",
    cover: photos.articleReconnecting,
    excerpt:
      "It’s normal for long-term relationships to fall into routines. Here are practical ways to reignite connection and rediscover each other.",
    title: "When Marriage Feels Like Routine: Reconnecting as a Couple",
    category: "Marriage",
    content: `
      <p>It’s normal for long-term relationships to fall into routines. Here are practical ways to reignite connection and rediscover each other.</p>
      
      <h2>Recognizing the Routine</h2>
      <p>When was the last time you and your partner had a meaningful conversation that wasn’t about logistics? If you can’t remember, you might be stuck in a routine. Signs include: parallel conversations, predictable activities, and emotional distance.</p>
      
      <h2>Breaking the Pattern</h2>
      <p>Small changes can make a big difference. Try one of these strategies:</p>
      <ul>
        <li><strong>Date nights:</strong> Schedule regular time together without distractions</li>
        <li><strong>New experiences:</strong> Try something new together to create fresh memories</li>
        <li><strong>Daily check-ins:</strong> Spend 10 minutes each day sharing your thoughts and feelings</li>
        <li><strong>Physical affection:</strong> Small touches like holding hands or hugs can reignite connection</li>
      </ul>
      
      <h2>Rebuilding Emotional Intimacy</h2>
      <p>Emotional intimacy is the foundation of a strong marriage. To rebuild it, practice vulnerability, active listening, and empathy. Share your dreams, fears, and daily experiences with each other.</p>
      
      <h2>When to Seek Help</h2>
      <p>If you’ve tried these strategies and still feel disconnected, consider couples counselling. A professional can help you identify underlying issues and develop personalized strategies for reconnecting.</p>
    `,
  },
  {
    slug: "faith-and-mental-health-why-seeking-counselling-is-not-a-lack-of-faith",
    cover: photos.articleFaith,
    excerpt:
      "Many people struggle with the idea that seeking professional help contradicts their faith. Let’s explore why counselling and faith can work together beautifully.",
    title: "Faith and Mental Health: Why Seeking Counselling Is Not a Lack of Faith",
    category: "Faith-Based",
    content: `
      <p>Many people struggle with the idea that seeking professional help contradicts their faith. Let’s explore why counselling and faith can work together beautifully.</p>
      
      <h2>The Myth</h2>
      <p>In many faith communities, there’s a misconception that seeking counselling shows a lack of faith. Some believe that prayer alone should be enough to solve life’s challenges. This belief can prevent people from getting the help they need.</p>
      
      <h2>The Reality</h2>
      <p>God gives us many gifts for healing, including the knowledge and skills of trained professionals. Just as we visit doctors for physical ailments, seeking help for mental and emotional health is not only acceptable but wise.</p>
      
      <h2>Faith and Counselling Together</h2>
      <p>Faith-based counselling integrates professional therapeutic techniques with spiritual principles. This approach can:</p>
      <ul>
        <li>Provide a safe space to explore spiritual questions</li>
        <li>Integrate prayer and scripture into the healing process</li>
        <li>Address spiritual struggles alongside emotional ones</li>
        <li>Honor your values while providing evidence-based support</li>
      </ul>
      
      <h2>Taking the First Step</h2>
      <p>If you’ve been hesitant to seek counselling because of your faith, know that many counsellors, including those at New Horizon Counselling Service, respectfully integrate Christian values into their practice when desired by clients.</p>
      
      <p>Seeking help is not a sign of weak faith,it’s a sign of wisdom and courage. You don’t have to face your challenges alone.</p>
    `,
  },
];

export default articles;
