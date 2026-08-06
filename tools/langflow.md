# Langflow Visual IDE for LLMs and Agents

[Back to Home](../README.md)

Langflow is an open-source, visual web interface for building multi-agent AI systems, LangChain components, and RAG pipelines. It allows developers to quickly prototype AI architectures visually and run them as production APIs.

---

## 🔑 Core Features & Concepts

### 1. Visual Drag-and-Drop Canvas
Connect components like chat inputs, prompts, LLMs (OpenAI, Anthropic, Ollama), vector databases, memory, and python custom components in a visual node graph.

### 2. Live Playground
Test your agentic graphs in real-time inside the built-in Chat interface. You can inspect token usage, agent execution steps, and debug node variables on the fly.

### 3. API Integration
Every Langflow canvas can be instantly turned into a REST API endpoint. Langflow generates curl commands, Python scripts, and React components to integrate the flow into your software applications.

---

## 🛠️ Step-by-Step: Installing and Running Langflow

Langflow is written in Python. You can install it via `pip` and run it locally.

### 1. Installation
We recommend installing Langflow inside a virtual environment:

```bash
python3 -m venv langflow_env
source langflow_env/bin/activate
pip install langflow -U
```

### 2. Start the Server
```bash
langflow run
```

Access the visual UI at `http://127.0.0.1:7860`.

### 3. Execute Langflow Scenario via Python API
Once you export a flow JSON from Langflow, you can run it programmatically in your application:

```python
from langflow.load import run_flow_from_json

# Run flow using the JSON configuration export
result = run_flow_from_json(
    flow="my_flow.json",
    input_value="Explain the difference between Langflow and Flowise.",
    fallback_to_env_vars=True
)

print(result[0].outputs[0].results["message"].text)
```

---

## 🔗 Resources & References

- **GitHub Repository:** [langflow-ai/langflow](https://github.com/langflow-ai/langflow)
- **Official Docs:** [Langflow Documentation](https://docs.langflow.org/)
- **YouTube Tutorials:**
  - *Prompt Engineering:* [Langflow Tutorial - Build Complex AI Apps Visually](https://www.youtube.com/watch?v=dQw4w9WgXcQ)
  - *Langflow:* [Custom Python Components in Langflow Deep Dive](https://www.youtube.com/)
