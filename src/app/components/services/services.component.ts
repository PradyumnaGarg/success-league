import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}
  finalData = [
    {
      serviceId: '1',
      serviceName: 'LEGAL, REGULATORY & COMPLIANCE',
      imagePath: 'assets/img/Attorney.jpeg',
      paragraphs: ['We advise and assist clients on the establishment of operations in the India across all corporate structures with special focus on handholding services to Start-ups. This involves obtaining all registrations, licenses and approvals and meeting all legal requirements for commencing their operations.', 'Our due diligence process provides a detailed review of a target business from a financial and commercial perspective, adding value by focusing on the key issues likely to affect the decision to proceed with the acquisition and those factors which affect the price.'],
      list: [
        'Advising on the legal framework for the proposed business activity, as well as on the preferred vehicle or structure for the investment, including the establishment of branches, subsidiaries, representative offices and regional headquarters.', 'Advising on and obtaining special registrations for Start-ups to avail of tax and other incentives.', 'Preparing, negotiating and reviewing contracts for various corporate and commercial transactions that may arise from the client’s business.', 'Corporate Law Assurance', 'Corporate Compliance Management', 'Due Diligence- Legal, Financial and Commercial for Mergers & Acquisitions and Corporate Restructuring', 'Forex Law Assurance', 'Joint Venture, Share Purchase and Acquisition', 'Agreements',
        'Commercial Agreements',
        'Review and assistance in documentation from regulatory viewpoint',
        'Mapping of regulatory processes',
        'Regulatory compliances for Corporate Laws, Securities Laws, Capital Market, Foreign Exchange Management Act, Competition Law and Intellectual Property.'
      ],
      subService: [
        {
          title: 'Litigation, Arbitration & Dispute Resolution',
          paragraph: ['Our Dispute Resolution Practice Group (DRPG) provides strategic dispute analysis and practical advice on realistic assessments of the outcomes and potential costs. We help you to make informed decisions consistent with your commercial objectives. The Firm has a strong Litigation & Arbitration Group consisting of lawyers with significant experience in handling dispute resolution in diverse jurisdictions.',
          'We help our clients in all fields ranging from civil and criminal litigation and focus on all types of litigation instituted and prosecuted within India. Our lawyers help the clients select the best and most suitable strategy while taking into account the complexities and merits of each matter on customized parameters. Our lawyers are acknowledged as some of the leading Indian practitioners in dispute resolution.',
          'The Dispute Resolution group entertains matters predominantly in most of the Courts in India, including District Courts, Tribunals, Commissions, Forums, High Courts and the Supreme Court of India.'
        ],
        list: [
          'International and domestic Commercial Arbitration',
          'Construction Arbitration',
          'Corporate disputes, including shareholders ‘actions and other inter-corporate and Intra-corporate disputes Partnership and Joint Venture controversies',
          'International Trade disputes',
          'Banking and Finance disputes',
          'Distribution Agreement disputes',
          'Insurance and Reinsurance actions',
          'Restraint of Trade',
          'Intellectual Property actions',
          'Construction Disputes',
          'Professional Negligence',
          'Contract and Property disputes',
          'Enforcement of Foreign Judgments and Multijurisdictional Conflicts',
          'Tort Claims',
          'Administrative, Tax and Customs Litigation',
          'Corporate Rehabilitation and Insolvency',
          'Infringement of Intellectual Property Rights',
          'Constitutional Matters',
          'Matrimonial Disputes',
          'Service Matters',
        ]
        },    {
          title: 'Employment & Service Matters',
          paragraphs: [
            'Employment law is a broad area of law that covers the relationship between the Employer and the employees, unions and employers, that is, management. The lawyers of the firm have been representing various employers in fields of labour disputes, union relations and wage & hour laws, compensation and retrenchment related disputes before the administrative, Judicial and Quasi judicial authorities and Tribunals.',
            'The professionals of the firm counsel the clients in each and every area of labour and employment law, and have been providing support in all aspects of employment and labour affairs, and regularly provide legal advice and represent various institutions, real estate developers, hotel chains, pharmaceutical companies towards the employment related affairs, Trade Unions and Employment related litigation.',
            'Success League helps employers arrive at sound and mutually beneficial employment policies, leveraging the deep knowledge of the dynamics of Indian labour laws and practices in consonance with and internationally accepted norms and policies.'
          ],
          list: [
            'General Employment Law Advice',
            'Employment Contract Review and Development',
            'Workmen’s Compensation',
            'Employee Benefits',
            'Executive Compensation and Transfer',
            'Collective Employment Termination',
            'Collective Bargaining Agreements',
            'Discrimination and Sexual Harassment Law Advice',
            'Trade Union Recognition procedures',
            'Expat & Immigration-related matters',
            'Drafting Non-Disclosure Agreements, Confidentiality Agreements, Non-compete Agreements'
          ]
        },
        {
          title: 'Representations and Settlement',
          paragraphs: [],
          list: [
            'Ministry of Corporate Affairs',
            'Stock Exchanges, Securities and Exchange Board of India , Securities Appellate Tribunal',
            'Competition Commission of India',
            'Reserve Bank of India, Invest India, Foreign Investment Promotion Board and Enforcement Directorate',
            'District Courts, Company Law Board, Tribunals, High Courts and Supreme Court',
            'Tax Authorities including Commissioner (Appeals) and ITAT',
            'Registrar and Intellectual Property Appellate Board',
            'The National Consumer Dispute Redressal Commission (NCDRC)',
            'The State Dispute Redressal Commissions',
            'District Consumer Dispute Redressal Forums',
            'Police Department',
          ]
        },
        {
          title: 'Banking, Para Financial & Insurance',
          paragraphs: [
            'Our banking & finance team offers keen insight into providing practical and innovative solutions to your banking and insurance (General & Life Insurance segment) issues.'
          ],
          list: [
            'Dishonour of Cheques',
            'Banking Loans to individuals and',
            'Loans to MSME & Other corporate entities',
            'Loan against Property (LAP)',
            'Loan against Shares (LAS)',
            'Issues relating to Letters of Credit, Bank and Performance Guarantees',
            'Proceedings under the Securitization and Reconstruction of Financial Interest and Enforcement of Security Interest Act, 2002 (SARFAESI)',
            'Equity & Commodity Broking through third-party broking',
            'General & Life Insurance Broking through third-party broking',
          ]
        },
        {
          title: 'Real Estate',
          paragraphs: ['The Firm has been advising to its clients on acquiring or disposing of real estate, creating a tax efficient investment vehicle, or strategizing a development project. The firm shall endeavour to advise you no matter you are an investor, financier, owner, occupier or developer. The Group also provides strategic legal advice to Builders, Developers, Infrastructure Development Companies, Property Owners and Government Undertakings on various issues relating to real estate transactions. The firm shall also provide services for due diligence and comprehensive documentation and multiple clients have particularly valued our support in dispute resolution.'],
          list:  ["Real Estate Investment Trusts (REIT)", "Matters pertaining to Real Estate Regulation & Development Act (RERA)", "Residential & Commercial Real Estate", "Retail Spaces, Shopping Malls, Multiplexes", "Hotels & Hospitality Properties", "Industrial Properties"]
        },
        {
          title: 'International Business/ Foreign Trade',
          paragraphs: [],
          list: ["Success League collaborates with Investment Facilitation Agencies and Business Chambers & prepares for matchmaking of foreign companies with their Indian counterparts for investment, technology transfer and trade.", "We regularly coordinate with overseas investment promotion agencies operating in India about business prospects for Indian industrialists & businesses in overseas markets.", "By means of diligent communication, we strive continuously to increase awareness on the part of foreign investors, industrialists, service providers and technology suppliers about business conditions, policy & procedures about FDI in selected regions and priority sectors of India.", "We facilitate to provide expert advice and information regarding forms of cooperation, such as joint ventures, subcontracting, licensing and any other form of transfer of technology/ resources to India.", "Success League also provides services like Customs Litigation, Customs Valuation & Costing, Export- Import Documentation alongwith facilitating International Trade Finance to its clients.", "All services under Export-Import under Foreign Trade (Development & Regulation) Act of 1992 & The Marine Products Export Development Authority Act, 1972"]
        },
        {
          title: 'LEGAL COVERAGE Under Statutory, Regulatory & Compliance',
          paragraphs: [],
          list: ["All Corporate matters under Companies Act, 2013, Indian Partnership Act, 1932, Limited Liability Partnership Act, 2008", "Litigation, Arbitration & Dispute Resolution", "Employment & Service Matters", "Representations and Settlement", "Para Financial Services (Banking & Insurance in the nature of Third-party Sub-Broking)", "Securitisation Services- Compliance of Proceedings under the Securitization and Reconstruction of Financial Interest and Enforcement of Security Interest Act, 2002 (SARFAESI)", "Overseas Immigration Assistance", "Export-Import under Foreign Trade (Development & Regulation) Act of 1992, The Marine Products Export Development Authority Act, 1972 and India's Export Import (EXIM) Policy", "Real Estate including Matters pertaining to Real Estate Regulation & Development Act (RERA), 2016"]
        },
      ]
    },
    {
      serviceId: '2',
      serviceName: 'START-UPS MENTORING AND FUNDING SERVICES',
      imagePath: 'assets/img/Startup mentoring.jpeg',
      paragraphs: [
        'With the spread of COVID-19, the world is facing an unprecedented economic and health crisis. Many global leaders and economists view COVID-19 as “the gravest challenge since World War II.” On March 16, 2020 the G7 leaders issued a joint statement “acknowledging that the COVID-19 pandemic is a human tragedy and a global health crisis, which also poses major risks for the world economy.”',
        'As the world has become tightly connected into a global society, the problems of one country can also greatly impact other countries through various global chains. Under these circumstances, it will be helpful to share information on the rigorous epidemiological investigation using ICT, and pan-governmental cooperation at national, provincial and city levels.',
        'As the pandemic is unfolding in ways completely different from past economic crises, we need unprecedented economic countermeasures. Under such circumstances, corporates should divert production to production plants with less disruption to the supply chain & workforce, update budget allocations to suit need transformation and recovery rate, offer loans & cash payments to suppliers to prevent production halt,  redeploy sales effort to online for B2C & B2B and offer paid leaves to employees and other support staff.',
        'They should reconsider policy measures w-r-t reimagining business possibilities, identifying behaviour shifts and considering inorganic moves. Moreover, they should re-strategize FY 2023-24 by building agile scenario-based plans, re-configuring workforce to deal with uncertainty, rationalize costs for resilience & explore M&A and other Corporate Restructuring moves.',
        'The Govt. of India has steadfastly risen to the occasion and introduced programmes like ‘Vocal for Local’ and ‘Aatmnirbhar Bharat’ to give tremendous boost to indigenous production and encouraging new entrepreneurs, technocrats and edupreneurs to start new ventures for generating employment opportunities as well as aid the Indian economy to reach a new high and resuscitate the India growth story.',
        'In 2021, many Indian Start-ups proudly entered the prestigious ‘Unicorn Club’, & successfully demonstrated that Indian business and digital fraternity can stand upto any challenge posed by unprecedented circumstances impacting global business environment.',
        'At Success League, we won’t share just our experience with you. Over the course of years, we have developed strong networks in different fields of business across varied sectors. Through Startup mentoring, we can help you envisage your short as well as long-term goals & objectives and act as a conduit between you and different agencies. We can open up networking opportunities for you in competitor analysis, demand estimation and market research amongst host of others.'
      ],
      subService: [
        {
          title: 'Our Overall Handholding Approach',
          list: [
            'Provide pertinent, positive support and constructive feedback.',
            'Guide you on how to be efficient and effective with your resources, especially time and money.',
            'Be practical in approach and focused on solutions to issues as they arise.',
            'Providing a safe and confidential engagement.'
          ],
          paragraphs: []
        },
        {
          title: 'Stage 1 - Introduction',
          list: [
            'Getting to know you and your business idea. Where have you been, where are you now, where do you want to get to?', 
            'What issues are you facing?',
            'Understanding your target audience, competitors, market.',
            'Drafting a plan and setting achievable goals and action points.',
            'How can we assist you?'
          ],
          paragraphs: []
        },
        {
          title: 'Stage 2 - Orientation',
          list: [
            'Detailed S.W.O.T. Analysis.',
            'In-depth Market Research Considerations.',
            'Establishing Key Performance Indicators.',
            'Understanding your customers segments'
          ],
          paragraphs: []
        },
        {
          title: 'Stage 3 - Conception',
          list: [
            'Consider challenges and risks.',
            'Removing Barriers to Success.',
            'What are the areas of change anticipated over the next three to five years?',
            'Financing your Venture through the Best Investment Vehicle.',
            'Marketing Strategy Defined and Outlined.',
          ],
          paragraphs: []
        },
        {
          title: 'Start-Up Services',
          paragraphs: [
            'Start-Up Services may be further categorized under Institutionalized and Soft-Skill Services, where we work in collaboration with our professional service partners in some areas.'
          ],
          list: []
        },
        {
          title: 'Institutionalized Services',
          paragraphs: [],
          list: [
            'Business Idea Generation and Feasibility',
            'Concept Refinement',
            'Identifying Scope for Further Innovation', 
            'Business Strategy',
            'Market Research',
            'Investor Pitch Creation',
            'Financing',
            'Legal , Regulatory & Compliance Issues',
            'Intellectual Property',
            'Preparing a "Value Proposition"',
            'Marketing & Brand Positioning',
            'IT & Software Development',
            'Comprehensive Digital Marketing Bouquet'
          ]
        },
        {
          title: 'Soft Skill Services',
          paragraphs: [],
          list: [
            'Imparting Effective Communication Skills.',
            'Leadership Development for the Promoters/ Core Team.',
            'Networking with appropriate Government Agencies, Professionals and Organizations.',
            'Preparation before interacting with Statutory Agencies/ Venture Capital Funds / Angel Investors/ Seed Financing Institutions/ Banks for Bridge Loans.',
            'Access to Start-Up Ecosystem.',
            'Forging Professional Relationships with other Entrepreneurs / Startups.',
            'Developing Flexibility, Knack of Diversification, Adaptability to Change and Perseverance.',
            'Identifying New Opportunities & ‘Having an Eye for Commercialisation’.',
            'Problem- Solving through Sharpening your Curiosity and Recognizing / unearthing new problems & challenges and search for potential niche opportunities.',
            'Spotting Trends and availing ‘First-Mover’s Advantage’.'
          ]
        }
      ]
    },
    {
      serviceId: '3',
      serviceName: 'START-UP FINANCING/ FUND RAISING/ INVESTMENT FACILITATION',
      imagePath: 'assets/img/Startup funding.jpeg',
      paragraphs: [],
      subService: [
        {
          title: 'What is a Start-Up Entity',
          paragraphs: [
            'As per Gazette notification dated May 23, 2017, an entity shall be considered as a Startup:'
          ],
          list: [
            'If it is incorporated as a private limited company (as defined in the Companies Act, 2013) or registered as a partnership firm (registered under section 59 of the Partnership Act, 1932) or a limited liability partnership (under the Limited Liability Partnership Act, 2008) in India; and',
            'Up to seven years from the date of its incorporation/ registration; however, in the case of Startups in the biotechnology sector, the period shall be up to ten years from the date of its incorporation/ registration; and',
            'If its turnover for any of the financial years since incorporation/ registration has not exceeded Rupees 25 crores; and',
            'If it is working towards innovation, development or improvement of products or processes or services, or if it is a scalable business model with a high potential of  employment generation or wealth creation.'
          ]
        },
        {
          title: '',
          paragraphs: [
            'Provided that any such entity formed by splitting up or reconstruction of a business already in existence shall not be considered a ‘Startup’.',
            'Further, The Manual for Procurement of Consultancy and other Services, 2017 considers “an entity as Start-up up to a period of 10 years vis-à-vis 5 years and turnover threshold has been revised from INR 25 crores to INR 100 crores”. Furthermore, an entity recognised as Start-up by DPIIT is eligible for benefit granted under Procurement purposes as against the requirement of obtaining eligible business certificate by the Inter-Ministerial Board.',
            'Success League assists the upcoming Start-Ups with availing all the financial and non-financial benefits offered under Start-Up India flagship program launched by the Govt. of India, namely:- '
          ],
          list: [
            'Startup India Seed Fund Scheme (SISFS)',
            'Fund of Funds for Startups (FFS)',
            'Section 80-IAC: Income Tax exemption for 3 out of 10 years',
            'Section 79: Carry forward and set off of losses',
            'Startups are provided with an 80% rebate in filing of patents vis-a-vis other companies, bringing down the cost from INR 8,000 to INR 1,600.',
            '50% rebate is also provided in filing of trademarks vis-a-vis other companies decreasing the cost from INR 10,000 to INR 5,000.',
            'A DPIIT recognized startup is eligible for exemption from the provisions of section 56(2) (vii b) of the Income Tax Act.',
            'The Finance Bill 2022 provided that the surcharge on the long-term capital gain is capped at 15% for unlisted companies from existing 37% for high income group. This announcement will effectively reduce the tax rate from 28.5% to 23.9%.'
          ]
        },
        {
          title: '',
          paragraphs: [
            'Additionally, Success League helps Start-ups for successfully meeting their financial requirements at every stage of funding by facilitating them to explore various avenues of funding & investment (Private as well as Government) at respective stages of their life cycle. The Mechanics of Financing under various stages are explained hereafter.'
          ],
          list: []
        },
        {
          title: 'Start-Up Funding',
          paragraphs: [
            'Startup funding is the process of searching and identifying investors who can finance an entrepreneur’s novel venture and transform his idea and vision into reality i.e. product or service, and later result into revenue generation. With more than 73,000 startups, India is the home to the third largest startup ecosystem in the world. Indian startups managed to raise funds to the tune of $19 Billion in 2022.',
            'Considering the various stages of growth through which a startup would undergo, the sources of funding may differ. E.g. a startup may have to go through the developmental process of sunrise, expansion, product development or it may decide to scale up its inventory and office space.',
            'In the overall commercial scenario, investors fund a startup in the hope of gaining a large amount of profit, and depending upon the nature of investment (debt or equity), they may also impact the running of the business by participating in the decision-making process. Usually, investors look for the primary factors involved in the funding process, namely-'
          ],
          list: [
            'Differential Offering & Value Proposition',
            'Management and Team',
            'Market Potential & Demand Estimation', 
            'Scalability and Sustainability',
            'Customers and Suppliers',
            'Competitive Landscape',
            'Financial Appraisal',
            'Marketing Avenues',
            'Exit Options'
          ]
        },
        {
          title: 'Stages of Funding',
          paragraphs: [
            "The most appropriate criteria of deciding the stage of startup funding involves the determination of time-scale and ascertainment of risk-perception associated with the product/ service. The stages of funding broadly fall into two categories: (a) Early Stage and (b) Later Stage."
          ],
          list: []
        },
        {
          title: 'Early Stage Financing: This stage includes-',
          paragraphs: [],
          list: [
            'Pre- Seed Funding/ Ideation',
            'Seed Funding/ Validation',
            'Sunrise/ Early Traction, Series-A or First-Round Financing',
            'Scaling, Series-B, or Second-Round Financing'
          ]
        },
        {
          title: '1. Pre- Seed Funding/ Ideation',
          paragraphs: [
            'This is the preliminary stage where the entrepreneur is trying to bring his idea to life. It is principally an ‘applied research’ phase where the promoter tries to transform his idea from a pre-commercialisation project case expected to develop into a prototype which may not necessarily result into a business launch. Here, the primary risk is ‘Marketability’, i.e. whether the idea is viable and whether it or another similar idea has been commercialised before or not?'
          ],
          list: []
        },
        {
          title: 'Funding Sources',
          paragraphs: [
            'This stage requires minimal amount of funding and involves fewer complexities and documentation and sources are very limited and informal channels are available to raise funds. Funding sources at this point consist of Self-financing (Bootstrapping), Family & Friends, Grants from pitching events, Awards from Business Plan conception competitions etc.'
          ],
          list: []
        },
        {
          title: '2. Seed Funding/ Validation',
          paragraphs: [
            'This stage involves the transformation of business idea research project into a prototype that could be used for product testing and market trials on a selected and limited potential customer base that could further enable commercialisation on a wider scale. At this stage, the entrepreneur has to hire a competent team, conduct thorough market research alongwith field trials and bring mentors onboard. It must also be ensured that technology being used matches the market opportunities.'
          ],
          list: []
        },
        {
          title: 'Funding Sources',
          paragraphs: [
            'Funds raised at this stage are used essentially for meeting marketing and product development related expenditures. The risk perception of investment at this stage is extremely high. Funding sources at this stage consist of Angel Investors, Crowd funding, business incubators and accelerators, Government Loan Schemes, Collateral-free Debt by Government Agencies.'
          ],
          list: []
        },
        {
          title: '3. Sunrise/ Early Traction, Series-A or First-Round Financing',
          paragraphs: [
            'This is the post market launch stage where commercial manufacturing has actually commenced and the startup’s products are available to the customers. The essence of this stage is that the product/service is being commercialised for the first time. The product may be Greenfield based on a relatively new or high technology and new business in which the entrepreneur has good knowledge and working experience.'
          ],
          list: []
        },
        {
          title: 'Funding Sources',
          paragraphs: [
            'Funds raised at this stage are used primarily for product development, expanding the customer base (App Downloads in case of Services) improving your brand credibility by launching novel offerings and tapping new markets by expanding geographical footprints. The risk perception at this stage is very high.',
            'Funding sources at this stage consist of Venture Capital Funds, Venture Debt Funds and Non-Banking Finance Companies (NBFC). Angel Investors may also participate at this stage but tend to have a diminished influence.',
            'Partly because of the equity dilution clause and partly due to the unviability of the low amount of equity investment, the involvement of Venture Capital Funds at this stage may generally be relatively low. Therefore, some start-ups may approach for Bank Loans as their product/ service starts to gain traction.'
          ],
          list: []
        },
        {
          title: '4. Scaling, Series-B, or Second-Round Financing',
          paragraphs: [
            'When a business reaches Series B stage, it becomes evident that the startup is now stable, product is marketed right, and the customers are actually buying the product or service. In the light of new consumers and rapidly increasing revenues, further infusion of funds becomes necessary to enhance marketing strategies & channels and form teams as per the business need and add new employees.'
          ],
          list: []
        },
        {
          title: 'Funding Sources',
          paragraphs: [
            'Funds raised at this stage are used primarily for meeting Working Capital requirements, in paying salaries, hiring more staff, improving the infrastructure and establishing it as a major market player. Funding sources at this stage consist of Venture Capital Funds, Private Equity Firms and Alternative Investment Funds (AIF). Venture Capital Funds provide larger funds at this stage than at other early-stage financing.',
          ],
          list: []
        },
        {
          title: 'Later Stage Financing',
          paragraphs: [
            'This stage of startup funding involves established businesses which require additional financial support but cannot take recourse to public issues of capital. It includes-'
          ],
          list: [
           'Growth, Series-C, or Third-Round Financing, Mezzanine/ Development Capital',
           'Expansion, Series-D, or Fourth-Round Financing, Bridge Capital',
           'Initial Public Offering (IPO)/ Going Public/ Floatation'
          ]
        },
        {
          title: '5. Growth, Series-C, or Third-Round Financing, Mezzanine/ Development Capital',
          paragraphs: [
            'Series C funding is meant for a company which is well on its way to the growth path and often interested in expanding broadly. It may be easier to find investors at this stage, as they trust the startup to succeed. In other words, it is the financing of established businesses which have overcome the extremely high-risk early stage and have recorded profits steadily for a few years. At this stage, the start-up experiences a fast rate of market growth with increasing revenues, and has crossed the Break-Even point.'
          ],
          list: []
        },
        {
          title: 'Funding Sources',
          paragraphs: [
            'The development finance stage has a time-frame of one to three years and falls in the medium risk category. Funds raised at this stage are used primarily for meeting expenditure related to building new products, reaching new markets, acquiring underperforming startups in the same industry, purchase of new equipment/plant, expansion of marketing and distribution facilities, re-finance of existing debt, penetration into new regions and induction of new management.',
            'Funding sources at this stage consist of Venture Capital Funds, Private Equity Firms and Alternative Investment Funds (AIF).'
          ],
          list: []
        },
        {
          title: '6. Expansion, Series-D, or Fourth-Round Financing, Bridge Capital',
          paragraphs: [
            'If a startup finds a potentially lucrative opportunity or a market segment that has come up surprisingly and was not factored in its earlier business plans or has fallen short of achieving the market goals in the previous stage, it may decide to raise more funds in the Series D round to address such issues. In a way, it represents the last round of financing before a planned exit.'
          ],
          list: []
        },
        {
          title: 'Funding Sources',
          paragraphs: [
            'Funding at this stage ‘bridges’ the financial gap between this phase and the IPO. This financing involves low risk perception and a time-frame of one to three years. Startups use such finance to expand business by way of growth of their own productive asset or by the acquisition of other firms/assets of other firms. Funding sources at this stage consist of Venture Capital Funds, Private Equity Firms and usually in the form of a loan or equity investment to provide financing for a relatively short time period until the issuer can complete a longer term financing such as a public offering or a new investment round. These loans are paid back with proceeds from the IPO.',
          ],
          list: []
        },
        {
          title: '7. Initial Public Offering (IPO)/ Going Public/ Floatation',
          paragraphs: [
            "An IPO consists of the sale of shares to the public by a Startup for the first time. It happens only when a company has an established customer base and stable revenues. Prior to an IPO, companies are considered to be privately held. An IPO issue means that a company's ownership is transforming from private to public—i.e., ‘going public’. This is also the first time that a company tries to raise funds directly from the public on a public platform such as a stock exchange.",
            "Only startups with a proven track record of profitability and growth can sell stock to the general public and list on the stock exchange. Funds raised from an IPO are used to pay off debts and fund growth initiatives.",
            "The merits of a public issue are liquidity of investments through listing on stock exchanges, higher price of securities compared to private placement and raise their public profile, image and credibility with public, customers & financial institutions."
          ],
          list: []
        },
        {
          title: 'Alternative Investment Fund (AIF)',
          paragraphs: [
            'An Alternative Investment Fund may be in the form of Private Equity Fund, Angel Investor Fund, Social Venture Fund, SME Fund etc. They comprise an important source of financing a Start-up at later stages. Alternative Investment Funds are governed by SEBI Alternative Investment Funds regulation, 2012.',
            'Alternative Investment Fund (AIF) means any fund established/incorporated in India in the form of a trust/company/limited liability partnership/ body corporate which is (i) a privately pooled investment vehicle and collects funds from Indian/foreign investors for investing in accordance with a defined investment policy for the benefit of its investors, and (ii) not covered under the mutual fund/other regulations of the SEBI to regulate fund management activities.',
            'The AIFs can seek registration in one of the three categories: I, II or III.'
          ],
          list: [
            'Category I AIF: They are funds which invest in start-up or early stage ventures/social ventures/small and medium enterprises (SMEs)/infrastructure/other sectors or areas which the Government/regulators consider as socially/economically desirable and would include Venture Capital Funds, SME Funds, Social Venture Funds, Infrastructure Funds and such other specified alternative investment funds.',
            'Category II AIF: They are funds which do not fall under Category I and III and which do not undertake leverage or borrowing other than to meet day-to-day operational requirements. Funds such as Private Equity Funds/Debt Funds for which no specific incentives or concessions are given by the Government or any other regulator are included in this category.',
            'Category III AIF: They are funds which employ diverse or complex trading strategies and may employ leverage including through investment in listed or unlisted derivatives. Funds such as Hedge Funds or Funds which trade with a view to make short-term returns or such other funds which are open-ended and for which no specific incentives or concessions are given by the Government or any other regulator are included in this category.'
          ]
        },
        {
          title: 'Government of India Financing Initiatives',
          paragraphs: [],
          list: [] 
        },
        {
          title: 'I. Fund of Funds for Start-Ups (FFS)',
          paragraphs: [
            'To provide equity funding support for development and growth of innovation driven enterprises, the government has set aside a corpus fund of INR 10,000 Crores managed by Small Industries Development Bank of India (SIDBI). The fund is in the nature of Fund of Funds, which means that the government participates in the capital of SEBI registered Venture Capital Funds, who invest twice the amount in start-ups. The flow of funds is Government > SIDBI > Venture Capitals > Startups.',
            'FFS has not only made capital available for start-ups at early stage, seed stage and growth stage but also played a catalytic role in terms of facilitating raising of domestic capital, reducing dependence on foreign capital and encouraging home grown and new venture capital funds.',
            'FFS does not invest directly in start-ups, but participate in the capital of Alternative Investment Funds registered with SEBI. It contributes to the corpus of AIFs for investing in equity and equity linked instruments of various start-ups at early stage, seed stage and growth stage.'
          ],
          list: []
        },
        {
          title: 'II. Start-Up India Seed Fund Scheme (SISFS)',
          paragraphs: [
            'Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry is initiating Startup India Seed Fund Scheme (SISFS) with an outlay of INR 945 Crores. The scheme was announced by Hon’ble Prime Minister during Startup India International Summit “Prarambh” on 16th January 2021.',
            'Startup India Seed Fund Scheme (SISFS) aims to provide financial assistance to start-ups for proof of concept, prototype development, product trials, market entry and commercialization. This would enable these start-ups to graduate to a level where they will be able to raise investments from angel investors or venture capitalists or seek loans from commercial banks or financial institutions. The target of the scheme is to disburse the Seed Fund to 3,600 start-ups through 300 incubators across India.'
          ],
          list: []
        },
        {
          title: 'Startup Fund Raising Process',
          paragraphs: [],
          list: [
            'Conducting a Proof of Concept and development of Prototype',
            'Assessing Funding Requirements',
            'Preparation of Pitch deck',
            'Finding the Correct Mentor',
            'Seeking Investors through Industry Research & access to Ecosystem' ,
            'Identifying the best Investment Avenue',
            'Perusing the Investment Readiness',
            'Approaching the Investors.',
            'Due Diligence by Investor’s Project Evaluation/ Appraisal Team',
            'Preparation of Term Sheet and subsequent Negotiations',
            'Legal Closing & Documentation',
            'Fund Transfer'
          ]
        },
        {
          title: 'Sources of Funding',
          paragraphs: [],
          list: [] 
        },
        {
          title: '1. Self- Financing/ Bootstrapping',
          paragraphs: [
            'Bootstrapping means growing the business with no outside investment. It means relying on your savings and revenue to operate and expand. Most founders resort to bootstrapping, which means utilising their savings as there is no external constraint or dilution of control. This would save the entrepreneur from any debt and wouldn’t cost him his equity either since the entire idea will be facilitated by his own resources.',
            'The promoter has to conduct a thorough inventory of his assets which include savings accounts, equity in real estate, retirement accounts, vehicles, recreational equipment and collections. He may decide to sell some assets for cash or to use them as collateral for a loan. Investments may be used as a resource.'
          ],
          list: [] 
        },
        {
          title: '2. Family and Friends',
          paragraphs: [
            'After self-financing, perhaps the second most popular source for startups before seed-funding stage is composed of family, friends and relatives. This is because many times, the promoters’ own resource may not suffice for the capital that he needs. The primary benefit of this source of investment is that there is an inherent level of trust between the entrepreneurs and the investors.',
            'People with whom the promoter has close relationships know his reliability and level of competence. The major drawback is that if the family members or friends think that lending money gives them right to ‘meddle’ and if the business fails, the issue of paying the money back can be a problem, putting the entire personal relationship at peril.'
          ],
          list: [] 
        },
        {
          title: '3. Grants from Pitching Events, Awards from Business Plan Conception Competitions',
          paragraphs: [
            'There are a number of organizations or platforms which host business events. A startup can consider being a part of such business challenges or competitions to raise funds where the host institutes or organisations provide prize money, grants, or financial benefits. Even though the amount of money may not be generally large, it is usually enough at the ideation stage.',
          ],
          list: [] 
        },
        {
          title: '4. Crowd Funding',
          paragraphs: [
            'These are platforms where entrepreneurs can raise money from a large group of people. Crowd funding platforms are hosted on online web portals that facilitate and streamline project promotion and the raising of capital.',
            'Crowd funding portals allow promoters to raise money in the form of donations, whereby donors/ contributors do not enjoy any ownership or participation in the said business. Here, one thing must be kept in mind that most individuals donate to facilitate the development of things they care about, to support the causes they espouse. Its major benefits include- obtaining proof of concept, getting free PR and obtaining feedback from potential customers.'
          ],
          list: [] 
        },
        {
          title: '5. Business Incubators and Accelerators',
          paragraphs: [
            'An incubator is an organisation that offers assistance to startup entrepreneurs in the form of office space, training, and management and all other required resources under one roof. They provide mentoring, funding and networking opportunities. This can result in seed investment and can build the foundation for a longer business arrangement.',
            'An accelerator is an institution that provides help to a startup to grow over a three-to four-month period, and is therefore a shorter arrangement than that of an incubator. It is a process of rapid, intense and immersive learning & education aimed at accelerating the growth of a startup. It provides mentorship and capital in return for equity.'
          ],
          list: [] 
        },
        {
          title: '6. Non-Banking Finance Companies (NBFC)',
          paragraphs: [
            'NBFCs generally offer their investments in the form of debt for enabling startups to meet their working capital requirements. This is done after the analysis of early traction of the startup in order to justify its revenues so as to validate its ability to finance the interest payment obligations. Some entrepreneurs might prefer debt over equity as debt funding does not dilute the promoter’s equity stake.',
          ],
          list: [] 
        },
        {
          title: '7. Government Loan Schemes',
          paragraphs: [
            'The Govt. of India has launched a few debt schemes to provide collateral-free debt to budding entrepreneurs to assist them in getting low cost capital easily. Primary among these are the Startup India Seed Fund Scheme and SIDBI Fund of Funds. Other major schemes include- SAMRIDH scheme, ASPIRE (A Scheme for Promotion of Innovation, Rural Industries and Entrepreneurship), Pradhan Mantri Mudra Yojana (PMMY), Atal Innovation Mission (AIM), Multiplier Grants Scheme (MGS), Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE ), Credit Linked Capital Subsidy for Technology Upgradation (CLCSS), and IREDA-NCEF Refinance Scheme.',
          ],
          list: [] 
        },
        {
          title: '8. Angel Investors',
          paragraphs: [
            'Angel investors are High Net Worth individuals who invest in startup businesses, normally in the early stages. They invest their money into high-potential startups in return for equity. Angel investors fill the gap between friends and family, and more formal venture capital funds.',
            'As per SEBI (Alternative Investment Funds Regulations 2012), an Angel Investor means any person who proposes to invest in an angel fund and satisfies one of the following conditions:'
          ],
          list: [
            'An individual investor who has',
            '(1) Tangible assets of at least `2 crores excluding value of his principal residence; and',
            '(2) (i) Early stage investment experience (i.e. prior experience in investing in start-up/ emerging/early-stage ventures);',
            '(2) (ii) Serial entrepreneur (i.e. a person who has promoted/ co-promoted more than one start-up venture);',
            '(2) (iii) Is a senior management professional with at least 10 years of experience;',
            'A body corporate with a net worth of atleast 10 crores',
            'An AIF registered under SEBI regulations as VCF'
          ] 
        },
        {
          title: '9. Venture Capital Funds (VCF)',
          paragraphs: [
            'Once a startup has gained significant market traction, and experienced good growth in revenue, it may approach Venture Capital Funds to raise funds for further scaling. Venture Capital is essentially equity finance in relatively new startups when it is fairly quite early to go public for raising funds. However, it is not always in the form of equity. It can also be in the form of debt.',
            'As per SEBI (Alternative Investment Fund Regulations 2012), a Venture capital fund means “an alternative investment fund which invests primarily in unlisted securities of start-ups, emerging/early-stage venture capital undertakings mainly involved in new products/services, technology / intellectual property right based activities/a new business model”. It is classified under ‘Category I AIF’.',
            'Venture Capital Undertaking means “a domestic company which is (i) not listed on a recognised stock exchange in India at the time of making investment; and (ii) engaged in the business for providing services, production/manufacture of article/things and does not include the following activities/sectors: (1) non-banking financial companies; (2) gold financing; (3) activities not permitted under industrial policy of Government of India; and (4) any other activity which may be specified by the SEBI in consultation with the Government of India from time to time”.'
          ],
          list: [] 
        },
        {
          title: '10. Private Equity Funds (PE)',
          paragraphs: [
            'Private Equity is a form of finance where firms make equity investments in private companies that have not yet gone public i.e. whose shared are not traded on the stock market. In a private equity deal, an investor buys a stake in a private company with the hope of ultimately realising an increase in the value of that stake.',
            'As per SEBI (Alternative Investment Fund Regulations 2012), a Private Equity Fund means an AIF which invests primarily in equity/equity linked instruments (i.e. instruments convertible into equity/preference shares, share warrants, compulsorily/optionally convertible debentures) or partnership interests of investee companies (i.e. companies/SPVs/limited partnership/body corporate in which an AIF makes an investment) according to the stated objectives of the fund. It is classified under ‘Category II AIF’.'
          ],
          list: [] 
        },
        {
          title: 'LEGAL COVERAGE Under Start-Up Mentoring & Financing',
          paragraphs: [
            'Ensuring Due Diligence and Compliance under the following: -',
            'As per SEBI (Alternative Investment Fund Regulations 2012), a Private Equity Fund means an AIF which invests primarily in equity/equity linked instruments (i.e. instruments convertible into equity/preference shares, share warrants, compulsorily/optionally convertible debentures) or partnership interests of investee companies (i.e. companies/SPVs/limited partnership/body corporate in which an AIF makes an investment) according to the stated objectives of the fund. It is classified under ‘Category II AIF’.'
          ],
          list: [
            'Start-Up India Initiative undertaken by the Govt. Of India',
            'Business Structure Formation under Companies Act, 2013, Indian Partnership Act, 1932, Limited Liability Partnership Act, 2008.',
            'Licencing of Business under Goods and Services Tax Act, 2017 and Shops and Establishments Act, 1953.',
            'Matters relating to Personnel and Labour under the following statutes: -',
            'The Industrial Disputes Act, 1947',
            'The Trade Unit Act, 1926',
            'The Inter-State Migrant Workmen (Regulation of Employment and Service) Act, 1979',
            'The Payment of Gratuity Act, 1972',
            'The Employees’ Provident Funds and Miscellaneous Provisions Act, 1952',
            'The Employees’ State Insurance Act, 1948.',
            'Building and Other Constructions Workers’ (Regulation of Employment and Conditions of Service) Act, 1996',
            'The Industrial Employment (Standing Orders) Act, 1946',
            'The Contract Labour (Regulation and Abolition) Act, 1970',
            'Regulation of Foreign Investments under regulations for foreign venture capital investors (FVCI), Schedule 6 of the foreign exchange management act (FEMA), 2000.',
            'Business Contract Management under Indian contract act, 1872.',
            'Startup Financing- Due Diligence under SEBI (Venture Capital Funds) Regulations 1996.',
            'Startup Financing- Compliance under SEBI Alternative Investment Funds Regulations, 2012',
            'Startup Financing- Compliance for ensuring eligibility under Start-Up India Seed Fund Scheme (SISFS).'
          ] 
        },
        
      ]
    },
    {
      serviceId: '5',
      serviceName: 'INTELLECTUAL PROPERTY',
      imagePath: 'assets/img/Intellectual Property.jpeg',
      paragraphs: [
        'Our innovative approaches encompass all aspects of intellectual property protection. Combining insightful advice and innovative tools, we help clients in obtaining, defending, enforcing, and exploiting intellectual property rights, including Copyrights, Trademarks and Patents. We offer seamless service on a range of matters, from counselling on registrability, conducting trademark searches, registration and maintenance, to commercialization, protection and enforcement.',
        'We also understand that effective protection of path-breaking technologies and successful litigation of patent disputes are critical aspects of today’s increasingly competitive business environment. The professionals and the firm have represented several international clients to provide Trademark Prosecution services in India.',
        'The Intellectual Property (IP) practice group contains several diverse individuals with scientific and non scientific backgrounds to facilitate Patent Filing and Prosecution. The firm also has attorneys who have extensive experience in the litigation of intellectual property conflicts especially for Trademark and Copyright Infringement and Passing Off. Besides the aforesaid, the firm has been advising and counselling towards negotiating and drafting a variety of license, assignment and sale agreements.',
        'Equipped with in-depth knowledge of local IP laws and commercial practices drawn from our extensive on-the-ground experience in the market, our lawyers & professionals deliver specialist advice in specific areas of intellectual property law such as IP litigation and enforcement actions.',
        'The firm also offers similar services for other Intellectual property rights like Trademarks, Copyrights, and Industrial Designs. We have got special expertise in the areas of Registration of Trademark/Service mark, advising and counselling on Trade Secret, Registration of Copyright, Filing of Patent Application, Registration of Design and Geographical Indications.'
      ],
      subService: [
        {
          title: '',
          paragraphs: [],
          list: [
            'Patent Drafting', 
            'Patent Application Preparation',
            'Patent Writing',
            'Patent Prosecution &Patent Litigation', 
            'Licensing and Franchising',
            'Technology Transfer',
            'IP Prosecution',
            'General IP Advisory',
            'Prior Art Searches',
            'Trademark Registration & Portfolio Management',
            'Trademark/Trade Dress Litigation',
            'Anti-piracy/Anti-counterfeiting',
            'Commercial/Non-contentious IP',
            'IP Audit and Due Diligence',
            'Customs Recordation of IP Rights',
            'IP Arbitration'
          ]
        },
        {
          title: 'LEGAL COVERAGE Under Intellectual Property Rights',
          paragraphs: [
            'Ensuring Compliance under various laws governing Intellectual Property Rights in India, namely: -'
          ],
          list: [
            'Trade Marks Act, 1999',
            'The Patents Act, 1970 (amended in 2005)',
            'The Copyright Act, 1957',
            'The Designs Act, 2000',
            'The Geographical Indication of Goods (Registration and Protection) Act, 1999',
            'The Protection of Plant Varieties and Farmers Rights Act, 2001',
            'The Information Technology Act, 2000'
          ] 

        }
      ]
    },
    {
      serviceId: '4',
      serviceName: 'BRAND PROMOTION',
      imagePath: 'assets/img/Brand Promotion.jpeg',
      paragraphs: [
        "Success League provides integrated branding services from conducting initial brand research to uncover key insights into your brand, to developing a brand strategy which clearly defines your brand's unique characteristics, values and attributes, to bringing your brand to life through logo, visual identity and collateral and launching your new or updated brand to employees and the market.",
        "We are ably supported in all our professional endeavours by our collaborations and trusted long standing productive relationships with major News Channels alongwith leading Trade & Business Newspapers & Magazines and premier Public Relations & Corporate Communication agencies.",
        "We will facilitate exclusive media interaction of our clients with top three to five mainline and financial news channels & newspapers to generate meaningful and positive messaging of their brands. The interaction will focus on milestones achieved by their company, future roadmap, challenges, new strategies etc. Our Services offered constitute the following: -",
      ],
      subService: [
        {
          title: '',
          paragraphs: [],
          list: [
            'Production of Television Commercials (TVCs), Documentaries, Impact Features & Radio Jingles',
            'Brand Identity Review',
            'Brand Projection Strategy',
            'Brand Positioning',
            'Brand Portfolio Analysis',
            'Customer Value Proposition',
            'Engagement with Stakeholders (Clients, Prospects, Peer Fraternity, Reference Groups, Industry Experts and Researchers)',
            'Brand Logo & Copywriting',
            'Digital & Graphic Design',
            'Brand Identity Development - Design & Collaterals',
            'Relationship Building Programs and Events',
            'Social Engagements including appropriate alignments with organizations and Social Interest Groups',
            'Business Network Management',
            'Media Strategy Interactions for building Third Party Credibility',
            'Web Presence Optimization'
          ]
        },
        {
          title: 'Media FAM Services',
          paragraphs: [
            'We would be pleased to facilitate a Media Familiarization tour may be organized with at least three prominent publications consisting of regional, electronic and online. Journalists will be taken to company premises as well as company’s manufacturing unit, if required, to analyse the work done by client’s company.'
          ],
          list: []
        },
        {
          title: 'Media Roundtables',
          paragraphs: [
            'Success League will facilitate to organise a media roundtable with select publications including regional, mainlines and financials to sustain the brand buzz and generate positive conversation. This entry by invitation only roundtable over lunch will go a long way to help in building good media contacts at the ground level.'
          ],
          list: []
        },
        {
          title: 'Speakership Opportunities',
          paragraphs: [
            'We will facilitate to explore speakership opportunity for our clients at leading national and regional events to create meaningful conversation about the brand. B2B events focusing on digitisation, infrastructure, real estate etc. to be tapped.'
          ],
          list: []
        },
        {
          title: 'Participation in Thought Leadership Forums',
          paragraphs: [
            'We will facilitate to highlight the client’s brand’s unique offering in context with Indian markets and make a blueprint to pave a way ahead through Op-ed articles to create impactful conversation.'
          ],
          list: []
        },
        {
          title: 'Social Media Promotion',
          paragraphs: [
            'To leverage the power of Facebook, Twitter, Instagram, LinkedIn and YouTube to enhance and rejuvenate brand image.'
          ],
          list: []
        },
        {
          title: 'Digital Marketing',
          paragraphs: [
            'Services to be provided include Search Engine Optimisation, Blog Writing & Feedback Management, Newsletters (designing, content layout), Online Content Production (stories & videos) for geo-targeting in multiple languages, E-Mail Marketing (designing of flyers, brochures) alongwith Development of Mobile App.'
          ],
          list: []
        },
        {
          title: '',
          paragraphs: [
            "LEGAL COVERAGE FOR Protection of Society from Deceptive and Misleading Media and Advertising under Various Laws and Regulations Protection of Society from Deceptive, Misleading, or False Advertising and Marketing Campaigns under different laws and statutes in India, namely: -"
          ],
          list: []
        },
        {
          title: 'Laws Governing Media and Entertainment',
          paragraphs: [],
          list: [
            'The Press Council Act 1978',
            'Cable Television Network Rules, 1994',
            'Code for Commercial Advertising on Doordarshan and All India Radio',
            'Electronic Media Monitoring Centre (EMMC)',
            'Cinematograph Act, 1952',
            'Norms for Journalist Conduct issued by the Press Council of India',
            'Code of Conduct of the News Broadcasters Association',
            'Press and Registration of Books Act, 1867',
            'Indian Telegraph Act, 1885 including Amendment Acts of 2003 and 2006',
            'Indian Wireless Telegraphy Act, 1933',
            'Vernacular Press Act, 1878',
            'Telecom Regulatory Authority of India Act, 1997'
          ]
        },
        {
          title: 'Laws Governing Marketing and Advertising',
          paragraphs: [],
          list: [
            'Consumer Protection Act, 1986',
            'Cable Television Networks (Regulation) Act, 1995',
            'Cable Television Network Rules, 1994',
            'Indecent Representation of Women (Prohibition) Act, 1986',
            'Young Persons (Harmful Publications) Act, 1956',
            'Emblems and Names (Prevention of Improper Use) Act, 1950',
            'Drugs and Magical Remedies (Objectionable Advertisements) Act, 1954',
            'The Prize Chits and Money Circulation Schemes (Banning) Act, 1978',
            'Drugs and Cosmetic Act, 1940',
            'The Food Safety and Standards Act, 2006',
            'Securities and Exchange Board of India (Prohibition of Fraudulent and Unfair Trade Practices Relating to Securities Market) Regulations, 2003',
            'Monopolies and Restrictive Trade Practices Act, 1969',
            'Competition Act, 2002',
            'Prevention of Misuse of Social Media under Information Technology Act, 2000 and Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Amendment Rules, 2022.'
          ]
        }
      ]
    }
  ]

  serviceToShow: any;

  ngOnInit(): void {
    this.route.params.subscribe(({serviceId}) => {
      console.log(serviceId)
      this.serviceToShow = this.finalData.find(sId => sId.serviceId == serviceId);
    })
  }


}
