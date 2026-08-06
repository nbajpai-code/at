# CrewAI Orchestration Framework

[Back to Home](../README.md)

CrewAI is a leading framework for orchestrating role-playing, collaborative AI agents. By defining clear roles, goals, tools, and background stories, CrewAI enables autonomous agents to collaborate, delegate tasks, and solve complex problems like a high-performing team.

---

## 🔑 Core Features & Concepts

### 1. Agents, Tasks, and Tools
- **Agent:** An autonomous actor with a specific `role`, `goal`, and `backstory` (e.g., "Senior Researcher"). You assign agents LLMs and specific tools.
- **Task:** A concrete assignment with a `description` and `expected_output` (e.g., "Summarize latest tech trends"). Tasks are linked to specific agents.
- **Tool:** Functions that agents can execute (e.g., Serper API for web search, Directory reader, Custom Python code).

### 2. Multi-Agent Collaboration
Agents can delegate tasks to other agents. CrewAI supports:
- **Sequential Process:** Tasks are executed one after another in order.
- **Hierarchical Process:** A manager agent determines which agent executes which task based on input.

### 3. Agent Memory
CrewAI supports three types of memory:
- **Short-term memory:** Contextual state shared during the execution run.
- **Long-term memory:** Stored history of previous runs (saved to disk).
- **Entity memory:** Key entities and facts learned during interactions.

---

## 🛠️ Step-by-Step Code Example: CrewAI setup in Python

Create a multi-agent research team in Python:

```python
import os
from crewai import Agent, Task, Crew, Process
from crewai_tools import SerperDevTool

os.environ["OPENAI_API_KEY"] = "your-openai-api-key"
os.environ["SERPER_API_KEY"] = "your-serper-api-key"

search_tool = SerperDevTool()

# Define Agents
researcher = Agent(
    role='Senior Research Analyst',
    goal='Uncover cutting-edge developments in AI agents',
    backstory="You are an expert analyst who identifies emerging trends in AI and workflow automation.",
    verbose=True,
    allow_delegation=False,
    tools=[search_tool]
)

writer = Agent(
    role='Lead Technical Content Writer',
    goal='Draft an engaging and technical report on AI agents',
    backstory="You are a skilled writer who simplifies complex technical terms into readable articles.",
    verbose=True,
    allow_delegation=True
)

# Define Tasks
task1 = Task(
    description='Conduct a search on the latest advancements in CrewAI vs AutoGen in 2026. Identify key features.',
    expected_output='A detailed list of bullet points outlining comparison parameters.',
    agent=researcher
)

task2 = Task(
    description='Using the analyst research, draft a comprehensive blog post explaining how to choose between them.',
    expected_output='A full 500-word blog post in markdown format.',
    agent=writer
)

# Launch the Crew
crew = Crew(
    agents=[researcher, writer],
    tasks=[task1, task2],
    process=Process.sequential
)

result = crew.kickoff()
print("######################")
print(result)
```

---

## 🔗 Resources & References

- **GitHub Repository:** [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI)
- **Official Docs:** [CrewAI Documentation](https://docs.crewai.com/)
- **YouTube Tutorials:**
  - *Matthew Berman:* [CrewAI Crash Course - Complete Beginners Guide](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
  - *Brandon Hancock:* [Build a Multi-Agent AI App with CrewAI and LangChain](https://www.youtube.com/)
