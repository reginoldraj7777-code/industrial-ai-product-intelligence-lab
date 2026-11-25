/* Curated public research register. Summaries intentionally modest.
   Vendor capability statements are not independent benchmarking results.
   Checked: 2026-11-25. No network calls are made by the app. */
window.ResearchRegister = {
  checkedOn:'2026-11-25',
  sources:[
    {id:'S01',organization:'Fraunhofer IIS',subject:'Allinga AI Model Factory',type:'Primary / official',verified:'Public offering',url:'https://www.iis.fraunhofer.de/en/ff/amm/allinga/ai-model-factory.html',finding:'Publicly describes domain adaptation, model evaluation, on-prem/edge optimization, RAG and integration.',limitation:'Does not disclose customer-specific prices or comparative results.'},
    {id:'S03',organization:'Microsoft',subject:'Microsoft Foundry RAG / Azure AI Search',type:'Vendor documentation',verified:'Advertised capability',url:'https://learn.microsoft.com/en-us/azure/foundry/concepts/retrieval-augmented-generation',finding:'Describes index-based retrieval and access-control approaches for RAG solutions.',limitation:'No customer-specific performance or total-cost evidence.'},
    {id:'S04',organization:'Microsoft',subject:'Azure AI Search document access control',type:'Vendor documentation',verified:'Advertised capability',url:'https://learn.microsoft.com/en-us/azure/search/search-document-level-access-overview',finding:'Documents approaches to permission-aware retrieval and document-level access control.',limitation:'Configuration and end-to-end security must be validated for each deployment.'},
    {id:'S05',organization:'AWS',subject:'Amazon Bedrock Knowledge Bases',type:'Vendor documentation',verified:'Advertised capability',url:'https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html',finding:'Describes managed ingestion, indexing and retrieval for RAG, with supported connectors and controls.',limitation:'No basis for claiming superiority versus another customer implementation.'},
    {id:'S06',organization:'NVIDIA',subject:'NVIDIA NIM deployment',type:'Vendor documentation',verified:'Advertised capability',url:'https://docs.nvidia.com/nim/',finding:'Describes model inference microservice deployment and integration patterns.',limitation:'Not equivalent to a complete end-user technical-knowledge assistant.'},
    {id:'S07',organization:'Fraunhofer IIS',subject:'SOOFI industrial AI',type:'Primary / official',verified:'Research context',url:'https://www.iis.fraunhofer.de/en/ff/amm/allinga/ai-model-factory/soofi.html',finding:'Describes Fraunhofer IIS work on post-training and evaluation of Soofi S for sovereign European industrial AI.',limitation:'Research reference; not a published customer-specific benchmark or price list.'},
    {id:'S08',organization:'Microsoft',subject:'Foundry IQ organizational knowledge',type:'Vendor documentation',verified:'Advertised capability',url:'https://azure.microsoft.com/en-us/products/ai-foundry/iq',finding:'Describes enterprise data retrieval, identity-based document permissions and grounding for agents.',limitation:'A Microsoft product description, not independent quality, cost or security verification for the fictional customer.'},
    {id:'S09',organization:'Amazon Web Services',subject:'Managed Bedrock Knowledge Bases',type:'Vendor documentation',verified:'Advertised capability',url:'https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html',finding:'Describes managed retrieval, data connectors and document-level ACL filtering for supported sources.',limitation:'Availability and controls depend on knowledge-base type, source connector and configuration; validate deployment.'},
    {id:'S10',organization:'Dify',subject:'Knowledge Pipeline',type:'Vendor documentation',verified:'Advertised capability',url:'https://dify.ai/rag',finding:'Describes configurable ingestion, metadata, retrieval, citations and cloud or enterprise self-hosted options.',limitation:'Self-hosted deployment and enterprise licensing require verification; not a measured benchmark.'},
    {id:'S11',organization:'Google Cloud',subject:'Agent Search on Gemini enterprise platform',type:'Vendor documentation',verified:'Advertised capability',url:'https://cloud.google.com/products/gemini-enterprise-agent-platform/agent-search',finding:'Describes search and RAG capabilities over enterprise structured and unstructured data.',limitation:'Cloud-platform capabilities; customer-specific data governance and quality unverified.'},
    {id:'S12',organization:'Fraunhofer IIS',subject:'Allinga offering portfolio',type:'Primary / official',verified:'Public positioning',url:'https://www.iis.fraunhofer.de/en/ff/amm/allinga.html',finding:'Frames Allinga portfolio and local model development for industrial use cases.',limitation:'Does not establish customer demand, commercial prices or independent superiority.'}
  ],
  opportunityPortfolio:[
    {application:'Technical Knowledge Assistant',segment:'Industrial maintenance / technical support',problem:'Authorized access to current manuals and procedures',possibleValue:'Faster verified information retrieval',openQuestion:'Does the existing search workflow fail on representative tasks?',pilot:'Compare time to verified answer, correctness and permissions',priority:'Lead case'},
    {application:'CAD & Engineering Copilot',segment:'Engineering / manufacturing design teams',problem:'Time-intensive design interpretation and validation',possibleValue:'Assist specialist CAD reviews and technical tasks',openQuestion:'What expert-reviewed task can be validated without safety compromise?',pilot:'Review task completion, expert acceptance and correction time',priority:'Opportunity hypothesis'},
    {application:'Operational Data Assistant',segment:'Industrial operations / process engineering',problem:'Investigation of sensor anomalies and process events',possibleValue:'Faster understandable operational investigation',openQuestion:'Are sensor provenance, timestamps and event context reliable?',pilot:'Compare investigation accuracy and time against analyst baseline',priority:'Opportunity hypothesis'},
    {application:'Industrial Speech Interface',segment:'Shopfloor and field service',problem:'Manual service notes are slow to capture in noisy environments',possibleValue:'Faster entry and more complete notes',openQuestion:'Can consent-cleared speech and local vocabulary be processed reliably under realistic noise?',pilot:'Compare field error, correction effort and completion time with manual entry',priority:'Opportunity hypothesis'},
  ],
  roleCoverage:[
    {job:'Customer discovery',module:'Stakeholder map and discovery guide',output:'Observe actual tasks; verify pain points and baseline',status:'Hypothesis'},
    {job:'Market intelligence',module:'Public source register and alternative matrix',output:'Validate customer fit, costs and supplier claims',status:'Desk research'},
    {job:'Technical evaluation',module:'Synthetic retrieval benchmark',output:'Test representative approved documents and identities',status:'Synthetic test'},
    {job:'Business case',module:'Financial scenario model',output:'Measure task savings and adoption; obtain cost quotes',status:'Modeled'},
    {job:'Customer workshop',module:'Agenda and discovery packet',output:'Confirm sponsor, participants and decision criteria',status:'Proposed'},
    {job:'Lead qualification',module:'Four fictional opportunities and discovery gates',output:'Confirm sponsor, data, constraints and agreed baseline',status:'Simulated'},
    {job:'Local model evaluation',module:'Recorded llama.cpp feasibility experiment',output:'18 real requests; 18 schema failures; independent human semantic review pending',status:'Measured / failed contract'},
    {job:'Pilot readiness',module:'Pilot charter and decision memo',output:'Agree quality, security, cost and go/no-go thresholds',status:'Proposed'},
  ],
  marketOptions:[
    {name:'Improve existing customer assistant',type:'Incumbent / baseline',find:'Customer system is not described or tested',known:'Potentially avoids migration and preserves familiar workflow',unknown:'Current data quality, retrieval quality, cost, contracts, permissions',source:'Customer validation required',gate:'Baseline first'},
    {name:'Microsoft Foundry IQ',type:'Managed enterprise knowledge',find:'Microsoft advertises organization data retrieval and document permissions',known:'Enterprise knowledge access is a documented feature',unknown:'Our customer integration, annual cost, actual performance and accepted security policy',source:'S08',gate:'Cloud and governance review'},
    {name:'Amazon Bedrock Knowledge Bases',type:'Managed enterprise RAG',find:'AWS advertises managed retrieval and ACL filtering for supported connectors',known:'Managed RAG and selected permission-aware options documented',unknown:'Specific connector, region, security, cost and quality for this customer',source:'S09',gate:'Configuration and procurement review'},
    {name:'Google Agent Search',type:'Managed search/RAG',find:'Google describes enterprise search and RAG',known:'Data retrieval and grounding available in public product description',unknown:'Customer deployment restrictions, cost and permission model',source:'S11',gate:'Cloud and identity review'},
    {name:'Dify Knowledge Pipeline',type:'Configurable builder / self-host option',find:'Dify documents pipeline and deployment choices',known:'Ingestion, retrieval and citations are claimed capabilities',unknown:'Enterprise deployment terms, integration effort, security tests, support',source:'S10',gate:'Security and operating ownership review'},
    {name:'Allinga specialist collaboration',type:'Applied R&D / adaptation pathway',find:'Fraunhofer describes domain adaptation, benchmarking, on-prem/edge and integration expertise',known:'Specialized research/development partnership capability',unknown:'Price, lead time, project scope and customer-specific superiority',source:'S01',gate:'Scope and technical feasibility review'},
  ],
  facts:[
    {claim:'Allinga offers training, specialization, evaluation and integration for domain-specific AI.',support:'S01',classification:'Official public statement'},
    {claim:'Microsoft documents RAG retrieval and document-level access-control options.',support:'S03, S04',classification:'Vendor documentation'},
    {claim:'AWS documents managed knowledge-base retrieval capabilities.',support:'S05',classification:'Vendor documentation'},
    {claim:'This fictional manufacturer has 80 maintenance workers and current search problems.',support:'Scenario assumption',classification:'Hypothetical, not factual'},
    {claim:'Illustrative option scores and projected business benefits.',support:'Scenario assumptions',classification:'Hypothetical, not measured'}
  ],
  stakeholders:[
    ['Maintenance engineers','End users','Find correct information quickly; verify sources','Task observation; interview'],
    ['Maintenance manager','Business sponsor','Workflow impact, quality, downtime risk','Baseline and prioritization workshop'],
    ['IT / security','Technical gatekeeper','Identity, permission checks, deployment, integration','Architecture and security review'],
    ['Procurement','Commercial evaluator','Costs, support, vendors, contracts','TCO and procurement checklist'],
    ['Business leadership','Economic decision maker','Value, risk, time horizon, adoption','Decision memo and pilot scorecard']
  ],
  discovery:[
    ['Workflow','Describe the last time a technician could not locate a verified instruction.','Observed use case, not speculation'],
    ['Impact','How often does this occur and what is the time or quality consequence?','Baseline and business priority'],
    ['Content','Which manuals are approved, current, versioned and searchable?','Data readiness'],
    ['Permissions','Who can access which technical documents?','Access-control policy'],
    ['Existing stack','What has been tried, what works, and where does the current assistant fail?','Baseline alternatives'],
    ['Infrastructure','What deployment, network and integration requirements are mandatory?','Feasibility gates'],
    ['Decision','Who sponsors a pilot and who signs off its results?','Commercial qualification']
  ],
  risks:[
    {risk:'Outdated or missing manuals',severity:'High',mitigation:'Document inventory, ownership, version checks and quarantine',owner:'Customer content owner'},
    {risk:'Permission leakage',severity:'Critical',mitigation:'Deny-by-default authorization; test restricted content with identities',owner:'Security lead'},
    {risk:'Unsupported instructions',severity:'High',mitigation:'Citations, abstention for low evidence, expert review and safe escalation',owner:'AI evaluation lead'},
    {risk:'Low user adoption',severity:'Medium',mitigation:'Co-design with technicians; measure real task completion',owner:'Product lead'},
    {risk:'Unrealistic cost model',severity:'Medium',mitigation:'Actual supplier quotes, full TCO, and low/base/high sensitivity',owner:'Commercial lead'},
    {risk:'Poor system integration',severity:'High',mitigation:'Confirm identity, APIs, access constraints and maintenance ownership',owner:'IT integration lead'}
  ]
};
