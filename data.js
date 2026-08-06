const toolsData = [
  {
    id: "zapier",
    name: "Zapier",
    category: "No-Code / Low-Code",
    description: "Enterprise integration platform with support for AI Actions, Chatbots, and visual canvases. Connects with 6,000+ apps.",
    link: "tools/zapier.md",
    badgeColor: "#ff4a00"
  },
  {
    id: "make",
    name: "Make.com",
    category: "No-Code / Low-Code",
    description: "Highly visual multi-step automation builder. Excels at complex branching, API requests, routing, and JSON formatting.",
    link: "tools/make_com.md",
    badgeColor: "#8d00ff"
  },
  {
    id: "n8n",
    name: "n8n",
    category: "Hybrid Open-Source",
    description: "Node-based workflow automation engine with native Advanced AI nodes, memory, vector databases, and code execution.",
    link: "tools/n8n.md",
    badgeColor: "#ff6d5a"
  },
  {
    id: "langflow",
    name: "Langflow",
    category: "Hybrid Open-Source",
    description: "Visual web interface for prototyping multi-agent AI systems, LLM chains, and RAG pipelines using LangChain components.",
    link: "tools/langflow.md",
    badgeColor: "#1e88e5"
  },
  {
    id: "crewai",
    name: "CrewAI",
    category: "Code-First Framework",
    description: "Python framework for orchestrating role-playing, collaborative AI agents that can delegate tasks and execute tools.",
    link: "tools/crewai.md",
    badgeColor: "#4caf50"
  },
  {
    id: "autogen",
    name: "AutoGen",
    category: "Code-First Framework",
    description: "Microsoft's framework for multi-agent conversational applications with local code execution loops and human-in-the-loop options.",
    link: "workflows/code_generator_agent.md",
    badgeColor: "#9c27b0"
  }
];

const workflowsData = [
  {
    title: "Lead Enrichment & Classification",
    tools: ["Zapier", "OpenAI"],
    description: "Trigger on new signup, enrich customer details using OpenAI GPT-4o, classify lead tier, write log, and notify Slack.",
    link: "workflows/lead_generation.md"
  },
  {
    title: "Intelligent Customer Support Router & Triage",
    tools: ["n8n", "Pinecone", "Claude"],
    description: "Route incoming support tickets using vector database lookup for matching documentation, draft response, and triage status.",
    link: "workflows/customer_support_agent.md"
  },
  {
    title: "Multi-Agent Research & Writing Crew",
    tools: ["CrewAI", "Serper", "Claude"],
    description: "A collaborative agent team: Researcher gathers facts, Writer drafts markdown, and Editor reviews & outputs final report.",
    link: "workflows/multi_agent_research.md"
  },
  {
    title: "Automated Testing Code Assistant",
    tools: ["AutoGen", "Python Executor"],
    description: "An interactive coder agent and a code tester agent running in a loop to write python code and debug unit tests locally.",
    link: "workflows/code_generator_agent.md"
  }
];

const resourcesData = [
  {
    title: "CrewAI Official Repository",
    type: "GitHub",
    tool: "CrewAI",
    url: "https://github.com/crewAIInc/crewAI",
    description: "Source code, issues, and examples for orchestrating role-playing, collaborative autonomous AI agents.",
    tags: ["Framework", "Multi-Agent", "Python", "Open-Source"]
  },
  {
    title: "n8n - Fair-Code Workflow Automation",
    type: "GitHub",
    tool: "n8n",
    url: "https://github.com/n8n-io/n8n",
    description: "Extendable, visual workflow automation tool with advanced AI nodes, HTTP requests, and javascript/python coding blocks.",
    tags: ["Workflow Engine", "Self-Hostable", "AI Nodes", "TypeScript"]
  },
  {
    title: "Langflow Visual AI Builder",
    type: "GitHub",
    tool: "Langflow",
    url: "https://github.com/langflow-ai/langflow",
    description: "Open-source UI for LangChain. Prototype agentic workflows, custom Python components, and vector store connectors.",
    tags: ["Visual Canvas", "LangChain", "API Creator", "Python"]
  },
  {
    title: "Microsoft AutoGen Framework",
    type: "GitHub",
    tool: "AutoGen",
    url: "https://github.com/microsoft/autogen",
    description: "A developer framework for orchestrating conversations between multiple agents that can execute local code blocks.",
    tags: ["Framework", "Code Execution", "Multi-Agent", "Conversational"]
  },
  {
    title: "Flowise Drag & Drop LLM Builder",
    type: "GitHub",
    tool: "Flowise",
    url: "https://github.com/FlowiseAI/Flowise",
    description: "Node-based UI for building customized LLM chains, agent workflows, memory systems, and prompt schemas.",
    tags: ["Visual Canvas", "LangChain", "Chatbots", "NodeJS"]
  },
  {
    title: "Liam Ottley: How to Build AI Agents in n8n",
    type: "YouTube",
    tool: "n8n",
    url: "https://www.youtube.com/watch?v=0w1vG7gG0y8",
    description: "Comprehensive step-by-step video guide for building production-grade AI agents using n8n and OpenAI.",
    tags: ["Tutorial", "Beginner Friendly", "AI Agency", "Integration"]
  },
  {
    title: "Prompt Engineering: Langflow Custom Python Components",
    type: "YouTube",
    tool: "Langflow",
    url: "https://www.youtube.com/watch?v=uT9Lg5wI1z0",
    description: "Deep dive video tutorial on creating custom nodes, loading files, and building dynamic API integrations inside Langflow.",
    tags: ["Python Coding", "Advanced", "Visual Builder", "Local Setup"]
  },
  {
    title: "Matthew Berman: CrewAI Crash Course for Multi-Agent Teams",
    type: "YouTube",
    tool: "CrewAI",
    url: "https://www.youtube.com/watch?v=sPzc6hMg7yY",
    description: "A complete walkthrough showing how to program CrewAI agents, assign tasks, connect custom web scraping tools, and save output.",
    tags: ["Crash Course", "Python", "Multi-Agent", "Web Search"]
  },
  {
    title: "n8n Official: Connect Vector Databases (Pinecone/Qdrant)",
    type: "YouTube",
    tool: "n8n",
    url: "https://www.youtube.com/@n8n-io",
    description: "Official n8n video guide on connecting vector store sub-nodes to support agent memory and RAG semantic lookup.",
    tags: ["Vector DB", "Pinecone", "Memory", "RAG Pipeline"]
  },
  {
    title: "Introducing Zapier AI Actions",
    type: "Article",
    tool: "Zapier",
    url: "https://zapier.com/help/create/customize/introducing-zapier-ai-actions",
    description: "Official Zapier Knowledge Base guide outlining how to authorize and execute 6000+ app actions from natural language interfaces.",
    tags: ["NLA", "API Integration", "Security", "OpenAI GPTs"]
  },
  {
    title: "n8n LangChain Integration Docs",
    type: "Article",
    tool: "n8n",
    url: "https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.advanced-ai/",
    description: "Official document outlining available LLMs, prompt template builders, document splitters, and agents in n8n.",
    tags: ["Documentation", "AI Nodes", "Memory", "LangChain"]
  },
  {
    title: "a16z: Emerging Architectures of Developer AI Agent Stacks",
    type: "Blog",
    tool: "General",
    url: "https://a16z.com/",
    description: "Andreessen Horowitz blog post discussing the evolution of agent frameworks, visual builders, and enterprise integration layers.",
    tags: ["Industry Analysis", "Architecture", "Design Patterns", "Trends"]
  },
  {
    title: "LangChain Blog: Stateful Multi-Agent Orchestration Patterns",
    type: "Blog",
    tool: "CrewAI",
    url: "https://blog.langchain.dev/",
    description: "Technical write-up analyzing state tracking, agent routing, decision loops, and collaborative delegation.",
    tags: ["Design Patterns", "State Management", "Routing", "Advanced"]
  }
];

// Export to window object for browser access
window.toolsData = toolsData;
window.workflowsData = workflowsData;
window.resourcesData = resourcesData;
