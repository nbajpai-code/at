# Agentic AI & Workflow Automation Resources Hub

Welcome to the **Agentic AI & Workflow Automation Resources Hub**! This repository is a curated, comprehensive collection of resources, guides, and interactive tools designed to help developers, AI engineers, and automation specialists build, orchestrate, and deploy agentic workflows.

It covers integration-first platforms like **Zapier**, **Make.com**, and **n8n**, as well as developer-first multi-agent frameworks like **CrewAI**, **AutoGen**, and **Langflow**.

---

## 🚀 Live Interactive Dashboard & Playground

This repository doubles as a **premium web-based interactive dashboard** where you can:
- **Search and filter** resources (GitHub repos, YouTube videos, blogs, official KB articles).
- Use the interactive **Workflow Visualizer Playground** to map out triggers, AI agents, logic nodes, and action integrations, then export them to standard JSON configurations.

### How to Run Locally:
1. Clone this repository:
   ```bash
   git clone https://github.com/nbajpai-code/at.git
   cd at
   ```
2. Start a local server:
   ```bash
   python3 -m http.server 8000
   ```
3. Open `http://localhost:8000` in your web browser.

---

## 🛠️ Supported Tools & Frameworks

We divide workflow tools into three primary paradigms. Click on the tool names to view detailed architecture breakdowns, features, and setup guides:

| Category | Tool | Description | Core Strengths |
| :--- | :--- | :--- | :--- |
| **No-Code / Low-Code** | [Zapier](tools/zapier.md) | Standard enterprise integration platform. Supports AI Actions, Canvas, and Copilots. | 6000+ app integrations, instant setup, user-friendly. |
| | [Make.com](tools/make_com.md) | Visual automation builder with complex logic, loops, and data manipulation. | Visual layout, complex routing, JSON parsing, API control. |
| **Hybrid Open-Source** | [n8n](tools/n8n.md) | Node-based workflow engine with native AI/LLM nodes, memory, and code execution. | Self-hostable, advanced branching, built-in vector store nodes. |
| | [Langflow](tools/langflow.md) | Visual IDE for building multi-agent AI systems, LLM chains, and RAG pipelines. | Drag-and-drop LLM components, LangChain-compatible, python backend. |
| **Code-First Multi-Agent** | [CrewAI](tools/crewai.md) | Orchestration framework for role-playing, collaborative autonomous agents. | Structured role definition, tool delegation, task sequence. |
| | [AutoGen](https://github.com/microsoft/autogen) | Framework for multi-agent conversation with customizable agents and human input. | Event-driven agents, code execution loop, conversation patterns. |

---

## 📋 Production-Ready Workflows

Explore step-by-step guides, architecture diagrams, and mock setups for real-world agentic workflows:

1. **[Lead Enrichment Agentic Pipeline](workflows/lead_generation.md)**
   - **Stack:** Zapier + OpenAI GPT-4o + Google Sheets + Slack.
   - **Concept:** Trigger on new signup, enrich data using web search/AI, classify lead value, and notify sales channel with tailored context.
2. **[Intelligent Customer Support Router & Triage](workflows/customer_support_agent.md)**
   - **Stack:** n8n + Vector Database (Pinecone) + Anthropic Claude + Zendesk.
   - **Concept:** Route incoming tickets based on sentiment and past solutions retrieved from vector memory, generating drafts for agents.
3. **[Multi-Agent Research & Writing Crew](workflows/multi_agent_research.md)**
   - **Stack:** CrewAI + Serper API + Claude 3.5 Sonnet.
   - **Concept:** Senior Researcher agent finds facts, Writer agent structures a report, and Editor agent polishes it.
4. **[Auto-Testing Code Assistant](workflows/code_generator_agent.md)**
   - **Stack:** AutoGen + Python Executor.
   - **Concept:** Two agents collaborate—one writes code based on specifications, and the other writes and executes unit tests, iterating until code passes.

---

## 📚 Curated Resources Directory

### GitHub Repositories
- [CrewAI](https://github.com/crewAIInc/crewAI) - Framework for orchestrating role-playing, collaborative AI agents.
- [n8n](https://github.com/n8n-io/n8n) - Node-based workflow automation with advanced AI node integration.
- [Langflow](https://github.com/langflow-ai/langflow) - Visual interface for LangChain. Build agents, chains, and RAG in minutes.
- [AutoGen](https://github.com/microsoft/autogen) - Microsoft's agentic framework supporting multi-agent conversation and LLMs.
- [Flowise](https://github.com/FlowiseAI/Flowise) - Drag & drop UI to build customized LLM flows.

### YouTube Channels & Tutorials
- **Liam Ottley:** Leading creator on AI Automation Agencies (AAA), covers Zapier AI, Make.com, and n8n integrations.
- **n8n Official Channel:** Video series on building AI Agents, connecting vector databases, and using sub-workflows.
- **Prompt Engineering:** Visual tutorials on Langflow, Flowise, CrewAI multi-agent programming, and local LLMs.
- **Matthew Berman:** In-depth reviews and step-by-step installation guides for AutoGen, CrewAI, and other open-source frameworks.

### Knowledge Base & Documentation
- [Zapier AI Actions Help Center](https://zapier.com/help/create/customize/introducing-zapier-ai-actions) - Guide on letting LLMs run Zapier triggers and actions programmatically.
- [n8n Advanced AI Nodes Docs](https://docs.n8n.io/integrations/builtin/cluster-nodes/sub-nodes/n8n-nodes-langchain.advanced-ai/) - Detailed instructions on using LLMs, memory, embeddings, and agents in n8n.
- [Langflow Quickstart](https://docs.langflow.org/) - Guide on installing Langflow locally and building your first conversational agent.
- [CrewAI Documentation](https://docs.crewai.com/) - Explains agents, tasks, tools, processes, and memory management.

---

## 🤝 Contributing
Contributions are welcome! If you have a workflow template, tool guide, or useful video/repo to add:
1. Fork the repo.
2. Add your content to the appropriate folder (`workflows/`, `tools/`, or `data.js`).
3. Open a Pull Request.

---

*Curated with ❤️ by [nbajpai-code](https://github.com/nbajpai-code).*
