import { useEffect } from 'react';
import './styles.css';

export default function App() {
  useEffect(() => {
    // The original site's animations and interactive behaviour run after React mounts.
    import('./site.js');
  }, []);

  return (
    <>
      {"\n"}
      <div id={"loader"}>
        {"\n"}
        <img src={`${import.meta.env.BASE_URL}assets/growth-on-display-logo.png`} alt={"Growth on Display"} />
        {"\n"}
        <div className={"bar"}>
          <span></span>
        </div>
        {"\n"}
      </div>
      {"\n"}
      <div id={"progress"}></div>
      {"\n"}
      <header id={"siteHeader"}>
        {"\n"}
        <div className={"wrap"}>
          {"\n"}
          <a href={"#top"} className={"brand"}>
            {"\n"}
            <img src={`${import.meta.env.BASE_URL}assets/growth-on-display-logo.png`} alt={"Growth on Display logo"} />
            {"\n"}
          </a>
          {"\n"}
          <nav>
            {"\n"}
            <button className={"menu-toggle"} id={"menuToggle"} aria-label={"Toggle menu"} aria-expanded={"false"}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            {"\n"}
            <ul id={"navList"}>
              {"\n"}
              <li>
                <a href={"#about"} className={"nav-link"}>
                  {"About"}
                </a>
              </li>
              {"\n"}
              <li>
                <a href={"#services"} className={"nav-link"}>
                  {"Services"}
                </a>
              </li>
              {"\n"}
              <li>
                <a href={"#process"} className={"nav-link"}>
                  {"Process"}
                </a>
              </li>
              {"\n"}
              <li>
                <a href={"#insights"} className={"nav-link"}>
                  {"Insights"}
                </a>
              </li>
              {"\n"}
              <li>
                <a href={"#contact"} className={"nav-link"}>
                  {"Contact"}
                </a>
              </li>
              {"\n"}
              <li>
                <a href={"#contact"} className={"nav-cta"}>
                  {"Book a Call"}
                </a>
              </li>
              {"\n"}
            </ul>
            {"\n"}
          </nav>
          {"\n"}
        </div>
        {"\n"}
      </header>
      {"\n"}
      <main id={"top"}>
        {"\n"}
        {"\n"}
        <section className={"hero"} id={"hero"}>
          {"\n"}
          <div className={"hero-bg"}>
            {"\n"}
            <div className={"blob blob1"} data-parallax={"0.03"}></div>
            {"\n"}
            <div className={"blob blob2"} data-parallax={"0.05"}></div>
            {"\n"}
            <div className={"blob blob3"} data-parallax={"0.04"}></div>
            {"\n"}
          </div>
          {"\n"}
          <div className={"wrap hero-inner"}>
            {"\n"}
            <h1>
              {"\n"}
              <span className={"line"}>
                <span>
                  {"Marketing That Creates"}
                </span>
              </span>
              {"\n"}
              <span className={"line"}>
                <span className={"grad"}>
                  {"Real Business Growth."}
                </span>
              </span>
              {"\n"}
            </h1>
            {"\n"}
            <p className={"sub"}>
              {"Helping businesses grow through strategy, creativity, performance marketing, AI automation, and digital experiences."}
            </p>
            {"\n"}
            <div className={"hero-ctas"}>
              {"\n"}
              <a href={"#contact"} className={"btn btn-primary"}>
                {"Book a Free Consultation "}
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"2"}>
                  <path d={"M5 12h14M13 6l6 6-6 6"}></path>
                </svg>
              </a>
              {"\n"}
              <a href={"#services"} className={"btn btn-outline"}>
                {"Explore Our Services"}
              </a>
              {"\n"}
            </div>
            {"\n"}
            <div className={"arrow-path"}>
              {"\n"}
              <svg viewBox={"0 0 520 100"} fill={"none"}>
                {"\n"}
                <path d={"M10 70 C 90 20, 150 90, 230 45 S 380 5, 510 20"} stroke={"url(#heroGrad)"} strokeWidth={"2.5"} strokeLinecap={"round"}></path>
                {"\n"}
                <defs>
                  {"\n"}
                  <lineargradient id={"heroGrad"} x1={"0"} y1={"0"} x2={"520"} y2={"0"} gradientunits={"userSpaceOnUse"}>
                    {"\n"}
                    <stop offset={"0"} stopColor={"#3FAEDD"}></stop>
                    {"\n"}
                    <stop offset={"0.35"} stopColor={"#82BA3F"}></stop>
                    {"\n"}
                    <stop offset={"0.65"} stopColor={"#E8A53D"}></stop>
                    {"\n"}
                    <stop offset={"1"} stopColor={"#E14F72"}></stop>
                    {"\n"}
                  </lineargradient>
                  {"\n"}
                </defs>
                {"\n"}
              </svg>
              {"\n"}
            </div>
            {"\n"}
          </div>
          {"\n"}
          <div className={"scroll-cue"}>
            <span>
              {"Scroll"}
            </span>
            <div className={"dot"}></div>
          </div>
          {"\n"}
        </section>
        {"\n"}
        {"\n"}
        <section className={"about"} id={"about"}>
          {"\n"}
          <div className={"wrap about-grid"}>
            {"\n"}
            <div data-reveal={""}>
              {"\n"}
              <span className={"eyebrow"}>
                {"About Us"}
              </span>
              {"\n"}
              <h2>
                {"A growth partner built on strategy, creativity, and technology."}
              </h2>
              {"\n"}
              <p>
                {"Growth on Display is a full-service digital marketing and AI automation agency based in Ahmedabad, Gujarat. We help startups, small businesses, and growing brands build stronger online identities, generate qualified leads, and achieve sustainable business growth."}
              </p>
              {"\n"}
              <p>
                {"Our expertise spans branding, website development, social media marketing, Meta Ads, Google Ads, SEO, AI automation, content creation, CRM integration, WhatsApp automation, and marketing strategy — all built on trust, creativity, data, and long-term partnerships."}
              </p>
              {"\n"}
            </div>
            {"\n"}
            <div className={"pillars"} data-reveal-stagger={""}>
              {"\n"}
              <div className={"pillar"}>
                {"\n"}
                <h4>
                  <span className={"dot"}></span>
                  {"Our Mission"}
                </h4>
                {"\n"}
                <p>
                  {"To help businesses grow through innovative marketing, creative design, technology, and AI-powered solutions."}
                </p>
                {"\n"}
              </div>
              {"\n"}
              <div className={"pillar"}>
                {"\n"}
                <h4>
                  <span className={"dot"}></span>
                  {"Our Vision"}
                </h4>
                {"\n"}
                <p>
                  {"To become one of India's most trusted digital growth partners for businesses across every industry."}
                </p>
                {"\n"}
              </div>
              {"\n"}
              <div className={"pillar"}>
                {"\n"}
                <h4>
                  <span className={"dot"}></span>
                  {"Where We Work From"}
                </h4>
                {"\n"}
                <p>
                  {"Proudly based in Ahmedabad, Gujarat — partnering with brands locally and across India."}
                </p>
                {"\n"}
              </div>
              {"\n"}
            </div>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        {"\n"}
        <section className={"services"} id={"services"}>
          {"\n"}
          <div className={"wrap"}>
            {"\n"}
            <div className={"section-head"} data-reveal={""}>
              {"\n"}
              <span className={"eyebrow"}>
                {"What We Do"}
              </span>
              {"\n"}
              <h2>
                {"Services built around your growth"}
              </h2>
              {"\n"}
              <p>
                {"A full stack of marketing, design, and automation services — chosen and combined based on what your business actually needs."}
              </p>
              {"\n"}
            </div>
            {"\n"}
            <div className={"service-grid"} data-reveal-stagger={""} id={"serviceGrid"}></div>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        {"\n"}
        <section className={"why"} id={"why"}>
          {"\n"}
          <div className={"wrap"}>
            {"\n"}
            <div className={"section-head"} data-reveal={""}>
              {"\n"}
              <span className={"eyebrow"}>
                {"Why Choose Us"}
              </span>
              {"\n"}
              <h2>
                {"The way we work, made simple"}
              </h2>
              {"\n"}
            </div>
            {"\n"}
            <div className={"why-grid"} data-reveal-stagger={""} id={"whyGrid"}></div>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        {"\n"}
        <section className={"process"} id={"process"}>
          {"\n"}
          <div className={"wrap"}>
            {"\n"}
            <div className={"section-head"} data-reveal={""}>
              {"\n"}
              <span className={"eyebrow"}>
                {"Our Process"}
              </span>
              {"\n"}
              <h2>
                {"A clear path from discovery to growth"}
              </h2>
              {"\n"}
              <p>
                {"Every engagement follows the same disciplined sequence, adapted to your goals."}
              </p>
              {"\n"}
            </div>
            {"\n"}
            <div className={"timeline"} id={"timeline"} data-reveal={""}></div>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        {"\n"}
        <section className={"industries"} id={"industries"}>
          {"\n"}
          <div className={"wrap"}>
            {"\n"}
            <div className={"section-head"} data-reveal={""}>
              {"\n"}
              <span className={"eyebrow"}>
                {"Industries We Serve"}
              </span>
              {"\n"}
              <h2>
                {"Marketing tailored to your world"}
              </h2>
              {"\n"}
            </div>
            {"\n"}
            <div className={"industry-grid"} data-reveal-stagger={""} id={"industryGrid"}></div>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        {"\n"}
        <section className={"insights"} id={"insights"}>
          {"\n"}
          <div className={"wrap"}>
            {"\n"}
            <div className={"section-head"} data-reveal={""}>
              {"\n"}
              <span className={"eyebrow"}>
                {"Insights"}
              </span>
              {"\n"}
              <h2>
                {"Ideas on marketing & growth"}
              </h2>
              {"\n"}
              <p>
                {"Articles and perspectives from our team — coming soon."}
              </p>
              {"\n"}
            </div>
            {"\n"}
            <div className={"insight-grid"} data-reveal-stagger={""} id={"insightGrid"}></div>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        {"\n"}
        <section className={"faq"} id={"faq"}>
          {"\n"}
          <div className={"wrap"}>
            {"\n"}
            <div className={"section-head center"} style={{"marginLeft": "auto", "marginRight": "auto", "textAlign": "center"}} data-reveal={""}>
              {"\n"}
              <span className={"eyebrow"} style={{"justifyContent": "center"}}>
                {"FAQ"}
              </span>
              {"\n"}
              <h2>
                {"Questions, answered"}
              </h2>
              {"\n"}
            </div>
            {"\n"}
            <div className={"faq-list"} id={"faqList"} data-reveal={""}></div>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
        {"\n"}
        <section className={"contact"} id={"contact"}>
          {"\n"}
          <div className={"wrap contact-grid"}>
            {"\n"}
            <div className={"contact-info"} data-reveal={""}>
              {"\n"}
              <span className={"eyebrow"}>
                {"Contact"}
              </span>
              {"\n"}
              <h2>
                {"Let's Build Something Great Together"}
              </h2>
              {"\n"}
              <p>
                {"Tell us about your business and where you want to grow — we'll take it from there."}
              </p>
              {"\n"}
              <div className={"info-row"}>
                {"\n"}
                <div className={"ic"}>
                  <svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"}></path>
                    <circle cx={"12"} cy={"10"} r={"3"}></circle>
                  </svg>
                </div>
                {"\n"}
                <span>
                  {"Ahmedabad, Gujarat, India"}
                </span>
                {"\n"}
              </div>
              {"\n"}
              <div className={"info-row"}>
                {"\n"}
                <div className={"ic"}>
                  <svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"}></path>
                  </svg>
                </div>
                {"\n"}
                <a href={"tel:+919274125689"}>
                  {"+91 9274125689"}
                </a>
                {"\n"}
              </div>
              {"\n"}
              <div className={"info-row"}>
                {"\n"}
                <div className={"ic"}>
                  <svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M4 4h16v16H4z"} opacity={"0"}></path>
                    <path d={"M22 6l-10 7L2 6"}></path>
                    <rect x={"2"} y={"4"} width={"20"} height={"16"} rx={"2"}></rect>
                  </svg>
                </div>
                {"\n"}
                <a href={"mailto:growthondisplay.in@gmail.com"}>
                  {"growthondisplay.in@gmail.com"}
                </a>
                {"\n"}
              </div>
              {"\n"}
              <div className={"social-row"}>
                {"\n"}
                <a href={"https://www.instagram.com/growthondisplay.in"} target={"_blank"} rel={"noopener"} aria-label={"Instagram"}>
                  {"\n"}
                  <svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <rect x={"2"} y={"2"} width={"20"} height={"20"} rx={"5"}></rect>
                    <circle cx={"12"} cy={"12"} r={"4"}></circle>
                    <circle cx={"17.5"} cy={"6.5"} r={"1"}></circle>
                  </svg>
                  {"\n"}
                </a>
                {"\n"}
                <a href={"https://www.linkedin.com/company/growth-on-display01/"} target={"_blank"} rel={"noopener"} aria-label={"LinkedIn"}>
                  {"\n"}
                  <svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A5.98 5.98 0 0 1 16 8z"}></path>
                    <rect x={"2"} y={"9"} width={"4"} height={"12"}></rect>
                    <circle cx={"4"} cy={"4"} r={"2"}></circle>
                  </svg>
                  {"\n"}
                </a>
                {"\n"}
              </div>
              {"\n"}
            </div>
            {"\n"}
            <form className={"form-card"} id={"contactForm"} data-reveal={""} onSubmit={(event) => window.handleSubmit?.(event)}>
              {"\n"}
              <div className={"form-row"}>
                {"\n"}
                <div className={"field"}>
                  <label htmlFor={"fname"}>
                    {"Name"}
                  </label>
                  <input id={"fname"} name={"name"} type={"text"} required placeholder={"Your full name"} />
                </div>
                {"\n"}
                <div className={"field"}>
                  <label htmlFor={"fcompany"}>
                    {"Company Name"}
                  </label>
                  <input id={"fcompany"} name={"company"} type={"text"} placeholder={"Your company"} />
                </div>
                {"\n"}
              </div>
              {"\n"}
              <div className={"form-row"}>
                {"\n"}
                <div className={"field"}>
                  <label htmlFor={"femail"}>
                    {"Email"}
                  </label>
                  <input id={"femail"} name={"email"} type={"email"} required placeholder={"you@company.com"} />
                </div>
                {"\n"}
                <div className={"field"}>
                  <label htmlFor={"fphone"}>
                    {"Phone"}
                  </label>
                  <input id={"fphone"} name={"phone"} type={"tel"} placeholder={"+91"} />
                </div>
                {"\n"}
              </div>
              {"\n"}
              <div className={"field"}>
                {"\n"}
                <label htmlFor={"fservice"}>
                  {"Service Required"}
                </label>
                {"\n"}
                <select id={"fservice"} name={"service"}>
                  {"\n"}
                  <option value={""}>
                    {"Select a service"}
                  </option>
                  {"\n"}
                  <option>
                    {"Digital Marketing"}
                  </option>
                  {"\n"}
                  <option>
                    {"Performance Marketing"}
                  </option>
                  {"\n"}
                  <option>
                    {"Meta Ads"}
                  </option>
                  {"\n"}
                  <option>
                    {"Google Ads"}
                  </option>
                  {"\n"}
                  <option>
                    {"SEO"}
                  </option>
                  {"\n"}
                  <option>
                    {"Website Development"}
                  </option>
                  {"\n"}
                  <option>
                    {"AI Automation"}
                  </option>
                  {"\n"}
                  <option>
                    {"WhatsApp Automation"}
                  </option>
                  {"\n"}
                  <option>
                    {"CRM Integration"}
                  </option>
                  {"\n"}
                  <option>
                    {"Branding"}
                  </option>
                  {"\n"}
                  <option>
                    {"Other"}
                  </option>
                  {"\n"}
                </select>
                {"\n"}
              </div>
              {"\n"}
              <div className={"field"}>
                <label htmlFor={"fmessage"}>
                  {"Message"}
                </label>
                <textarea id={"fmessage"} name={"message"} placeholder={"Tell us a bit about your goals..."}></textarea>
              </div>
              {"\n"}
              <div className={"form-actions"}>
                {"\n"}
                <button type={"submit"} className={"btn btn-primary"}>
                  {"Send Message"}
                </button>
                {"\n"}
                <a href={"#contact"} className={"btn btn-outline"} onClick={() => document.getElementById('fservice')?.focus()}>
                  {"Book Consultation"}
                </a>
                {"\n"}
              </div>
              {"\n"}
              <p id={"formStatus"} className={"form-status"} role={"status"} aria-live={"polite"}></p>
              {"\n"}
            </form>
            {"\n"}
          </div>
          {"\n"}
        </section>
        {"\n"}
      </main>
      {"\n"}
      <footer>
        {"\n"}
        <div className={"wrap"}>
          {"\n"}
          <div className={"footer-grid"}>
            {"\n"}
            <div>
              {"\n"}
              <div className={"footer-brand"}>
                <img src={`${import.meta.env.BASE_URL}assets/growth-on-display-logo.png`} alt={"Growth on Display"} />
                <span>
                  {"Growth on Display"}
                </span>
              </div>
              {"\n"}
              <p className={"tag"}>
                {"Marketing That Creates Real Business Growth."}
              </p>
              {"\n"}
              <div className={"foot-social"}>
                {"\n"}
                <a href={"https://www.instagram.com/growthondisplay.in"} target={"_blank"} rel={"noopener"} aria-label={"Instagram"}>
                  <svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <rect x={"2"} y={"2"} width={"20"} height={"20"} rx={"5"}></rect>
                    <circle cx={"12"} cy={"12"} r={"4"}></circle>
                    <circle cx={"17.5"} cy={"6.5"} r={"1"}></circle>
                  </svg>
                </a>
                {"\n"}
                <a href={"https://www.linkedin.com/company/growth-on-display01/"} target={"_blank"} rel={"noopener"} aria-label={"LinkedIn"}>
                  <svg viewBox={"0 0 24 24"} fill={"none"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
                    <path d={"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A5.98 5.98 0 0 1 16 8z"}></path>
                    <rect x={"2"} y={"9"} width={"4"} height={"12"}></rect>
                    <circle cx={"4"} cy={"4"} r={"2"}></circle>
                  </svg>
                </a>
                {"\n"}
              </div>
              {"\n"}
            </div>
            {"\n"}
            <div className={"footer-col"}>
              {"\n"}
              <h5>
                {"Quick Links"}
              </h5>
              {"\n"}
              <ul>
                {"\n"}
                <li>
                  <a href={"#about"}>
                    {"About"}
                  </a>
                </li>
                {"\n"}
                <li>
                  <a href={"#process"}>
                    {"Process"}
                  </a>
                </li>
                {"\n"}
                <li>
                  <a href={"#insights"}>
                    {"Insights"}
                  </a>
                </li>
                {"\n"}
                <li>
                  <a href={"#contact"}>
                    {"Contact"}
                  </a>
                </li>
                {"\n"}
              </ul>
              {"\n"}
            </div>
            {"\n"}
            <div className={"footer-col"}>
              {"\n"}
              <h5>
                {"Services"}
              </h5>
              {"\n"}
              <ul>
                {"\n"}
                <li>
                  <a href={"#services"}>
                    {"Digital Marketing"}
                  </a>
                </li>
                {"\n"}
                <li>
                  <a href={"#services"}>
                    {"Meta & Google Ads"}
                  </a>
                </li>
                {"\n"}
                <li>
                  <a href={"#services"}>
                    {"SEO"}
                  </a>
                </li>
                {"\n"}
                <li>
                  <a href={"#services"}>
                    {"Website Development"}
                  </a>
                </li>
                {"\n"}
                <li>
                  <a href={"#services"}>
                    {"AI Automation"}
                  </a>
                </li>
                {"\n"}
              </ul>
              {"\n"}
            </div>
            {"\n"}
          </div>
          {"\n"}
          <div className={"footer-bottom"}>
            {"\n"}
            <span>
              {"Copyright © "}
              <span id={"year"}></span>
              {" Growth on Display. All rights reserved."}
            </span>
            {"\n"}
            <span>
              {"Ahmedabad, Gujarat  ·  +91 9274125689  ·  growthondisplay.in@gmail.com"}
            </span>
            {"\n"}
          </div>
          {"\n"}
        </div>
        {"\n"}
      </footer>
      {"\n"}
      <a href={"https://wa.me/919274125689?text=Hi%20Growth%20on%20Display%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services."} target={"_blank"} rel={"noopener"} id={"whatsappBtn"} aria-label={"Chat with us on WhatsApp"}>
        {"\n"}
        <svg viewBox={"0 0 32 32"} fill={"none"}>
          <path d={"M16 3C9.1 3 3.5 8.6 3.5 15.5c0 2.4.65 4.6 1.8 6.5L3 29l7.2-2.3a12.4 12.4 0 0 0 5.8 1.5c6.9 0 12.5-5.6 12.5-12.5S22.9 3 16 3z"} fill={"#25D366"}></path>
          <path d={"M22.1 18.9c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-2-1.8-2.3-.2-.3 0-.5.1-.6.1-.1.3-.4.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.8-1-2.4-.3-.6-.5-.6-.7-.6h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.2-.6-.4z"} fill={"#fff"}></path>
        </svg>
        {"\n"}
      </a>
      {"\n"}
      {"\n"}
    </>
  );
}
