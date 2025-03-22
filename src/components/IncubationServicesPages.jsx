const content = {
  Mentoring: {
    title: "Mentoring",
    text: "An insightful mentoring initiative forms the core of the learning eco-system which complements classroom learning, while expanding their network. This initiative assists budding entrepreneurs to draw various insights and get real-time feedback on their venture and venture ideas, thus giving them a better foothold in the marketplace. A combination of monthly group mentoring and individualized sessions would be arranged for the participants.The mentoring team would comprise an alumnus and faculties. While the incubating companies may assist in running the start-ups setup by entrepreneurs, an extensive and well-connected network is in place to provide mentoring support as per the need and the stage of the start-up. What’s more, CEDI also provides start-ups with an opportunity to interact one-on-one with accomplished entrepreneurs.",
  },
  StudentInterns: {
    title: "Student Interns",
    text: "CEDI, has to its credit, that of incubating several companies across the nation. Students get internship at these incubating companies over different roles. As companies need manpower, they recruit from the NIT Trichy Campus. There’s a mutual understanding between the companies and entrepreneurial cell to find fresh talent and innovative minds, who will be best suited for diverse departments in start-ups. The students are also excited to work in a challenging ecosystem where the work culture is flexible and educative. Their comprehension levels are bound to go up.",
  },
  Flexibility: {
    title: "Flexibility",
    text: "CEDI interviews these students to find out what kind of support is required, and at which stage in the development cycle to ensure a high probability for growth in the near term, such that they can utilize the services we offer. We commit for 24 months of incubation and an extension of 12 months, but they can leave earlier if needed. CEDI understands the entrepreneurial mind-set, so agreements are flexible. Ultimately our goal is to create successful companies with a solid employment base, and keep the end-goal in mind.",
  },
  IntegrationCommunity: {
    title: "Integration Community",
    text: "A coherent framework of incubation strategies and interventions is being adopted at CEDI to encourage enterprise development through new venture creation in local communities by integrating community leaders and members, institution, self-help groups, women entrepreneurs, to work together and take collective actions towards community wellbeing by tackling the socio‐economic problems and opportunities of rural communities in solving the common problems.",
  },
  CorporateExpertise: {
    title: "Corporate Expertise",
    text: "CEDI has a pool of experts from various corporate sectors across all domains. Corporate experts incubate ideas internally from within the organization or from the start-up community depending on the need of the incubatee. Other criteria such as the quality of the founding team as well as foreseeing the students’ ability to fit in with culture of the parent organization also may play an important role in the selection of the incubatee. Our corporate experts have catalyzed the growth of incubatees in CEDI. Once the motive for the incubatee is determined, corporate partners develop criteria to determine the type of business to incubate, or consider which profile of external start-ups to support. These criteria include domain, core/non-core business, as well as the stage and source of the incubatee.",
  },
};

export default function IncubationServicesPages({ contentOf }) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 bg-white p-5 shadow rounded">
      <h1 className="text-3xl font-semibold text-gray-700">
        {content[contentOf].title}
      </h1>
      <div className="bg-blue-500 p-0.5 w-[100px] "></div>
      <p className="text-gray-600 text-lg">{content[contentOf].text}</p>
    </div>
  );
}
