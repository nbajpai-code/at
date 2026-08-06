document.addEventListener("DOMContentLoaded", () => {
  // Navigation Handler
  setupNavigation();

  // Load & Render Lists
  renderTools();
  renderWorkflows();
  renderResources();

  // Setup Search and Filters
  setupSearchAndFilters();

  // Setup Workflow Visualizer Builder
  setupWorkflowBuilder();
});

/* ==========================================================================
   Navigation
   ========================================================================== */
function setupNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".view-section");
  const logoBtn = document.getElementById("logo-btn");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("data-target");
      
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      switchView(targetId);
    });
  });

  logoBtn.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    document.querySelector('[data-target="dashboard-view"]').classList.add("active");
    switchView("dashboard-view");
  });
}

function switchView(targetId) {
  const sections = document.querySelectorAll(".view-section");
  sections.forEach(section => {
    section.classList.remove("active");
    if (section.id === targetId) {
      section.classList.add("active");
    }
  });
}

/* ==========================================================================
   Dashboard Renderer (Tools & Workflows)
   ========================================================================== */
function renderTools() {
  const container = document.getElementById("tools-container");
  if (!container || !window.toolsData) return;

  container.innerHTML = window.toolsData.map(tool => `
    <div class="glass-card">
      <div class="tool-header">
        <h3 class="tool-title">${tool.name}</h3>
        <span class="tool-badge" style="color: ${tool.badgeColor}; border-color: ${tool.badgeColor}44; background: ${tool.badgeColor}11;">
          ${tool.category}
        </span>
      </div>
      <p class="tool-desc">${tool.description}</p>
      <a href="${tool.link}" class="card-link nav-trigger" data-target="workflows-view">
        Explore Workflows & Guides <span>&rarr;</span>
      </a>
    </div>
  `).join("");

  // Handle navigating to guides from links
  container.querySelectorAll(".nav-trigger").forEach(link => {
    link.addEventListener("click", (e) => {
      // Find matching nav target and click it
      const targetId = link.getAttribute("data-target");
      const navLink = document.querySelector(`[data-target="${targetId}"]`);
      if (navLink) {
        e.preventDefault();
        navLink.click();
      }
    });
  });
}

function renderWorkflows() {
  const summaryContainer = document.getElementById("workflows-summary-container");
  const detailedContainer = document.getElementById("workflows-detailed-container");
  if (!summaryContainer || !detailedContainer || !window.workflowsData) return;

  const summaryHtml = window.workflowsData.slice(0, 3).map(wf => `
    <div class="glass-card">
      <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
        ${wf.tools.map(tool => `<span class="tag" style="color: var(--accent-cyan); border-color: rgba(6,182,212,0.15);">${tool}</span>`).join("")}
      </div>
      <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; font-family: 'Outfit';">${wf.title}</h3>
      <p style="color: var(--text-secondary); font-size: 0.88rem; margin-bottom: 1.25rem; min-height: 48px;">${wf.description}</p>
      <a href="${wf.link}" class="card-link">Read Blueprint Guide <span>&rarr;</span></a>
    </div>
  `).join("");

  const detailedHtml = window.workflowsData.map(wf => `
    <div class="glass-card">
      <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem; flex-wrap: wrap;">
        ${wf.tools.map(tool => `<span class="tag" style="color: var(--accent-pink); border-color: rgba(236,72,153,0.15);">${tool}</span>`).join("")}
      </div>
      <h3 style="font-size: 1.35rem; font-weight: 700; margin-bottom: 0.75rem; font-family: 'Outfit';">${wf.title}</h3>
      <p style="color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 1.5rem; min-height: 54px;">${wf.description}</p>
      <a href="${wf.link}" class="btn-primary" style="display: inline-block; text-decoration: none; text-align: center;">View Setup Code & Details</a>
    </div>
  `).join("");

  summaryContainer.innerHTML = summaryHtml;
  detailedContainer.innerHTML = detailedHtml;
}

/* ==========================================================================
   Resource Library Filters & Rendering
   ========================================================================== */
let activeFilters = {
  media: "all",
  tool: "all",
  search: ""
};

function setupSearchAndFilters() {
  const searchInput = document.getElementById("search-bar");
  const filterBtns = document.querySelectorAll(".filter-btn");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      activeFilters.search = e.target.value.toLowerCase().trim();
      renderResources();
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-filter-type");
      const value = btn.getAttribute("data-value");

      // Reset active state for buttons in the same container
      const parent = btn.parentElement;
      parent.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      activeFilters[type] = value;
      renderResources();
    });
  });
}

function renderResources() {
  const container = document.getElementById("resources-container");
  if (!container || !window.resourcesData) return;

  const filtered = window.resourcesData.filter(res => {
    // 1. Media Type Filter
    if (activeFilters.media !== "all" && res.type !== activeFilters.media) {
      return false;
    }
    // 2. Tool Filter
    if (activeFilters.tool !== "all" && res.tool !== activeFilters.tool) {
      return false;
    }
    // 3. Search Filter
    if (activeFilters.search) {
      const q = activeFilters.search;
      const titleMatch = res.title.toLowerCase().includes(q);
      const descMatch = res.description.toLowerCase().includes(q);
      const tagMatch = res.tags.some(tag => tag.toLowerCase().includes(q));
      const toolMatch = res.tool.toLowerCase().includes(q);
      const typeMatch = res.type.toLowerCase().includes(q);
      
      if (!titleMatch && !descMatch && !tagMatch && !toolMatch && !typeMatch) {
        return false;
      }
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="glass-card" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
        <span style="font-size: 2.5rem;">🔍</span>
        <h3 style="margin-top: 1rem; font-family: 'Outfit';">No matching resources found</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">Try refining your keywords or checking alternative categories.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(res => {
    let typeClass = "";
    switch(res.type) {
      case "GitHub": typeClass = "type-github"; break;
      case "YouTube": typeClass = "type-youtube"; break;
      case "Article": typeClass = "type-article"; break;
      case "Blog": typeClass = "type-blog"; break;
    }

    return `
      <div class="glass-card resource-card">
        <div class="resource-top">
          <div class="resource-meta">
            <span class="resource-type ${typeClass}">${res.type}</span>
            <span class="tag" style="color: var(--accent-indigo); border-color: rgba(99,102,241,0.15);">${res.tool}</span>
          </div>
          <h4 class="resource-title">${res.title}</h4>
          <p class="resource-desc">${res.description}</p>
        </div>
        <div>
          <div class="resource-tags">
            ${res.tags.map(t => `<span class="tag">#${t}</span>`).join("")}
          </div>
          <a href="${res.url}" target="_blank" class="card-link" style="font-weight: 700; width: 100%; justify-content: space-between; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 0.75rem;">
            Access Resource <span>&rarr;</span>
          </a>
        </div>
      </div>
    `;
  }).join("");
}

/* ==========================================================================
   Workflow Visualizer Builder
   ========================================================================== */
let activeNodes = [];
let draggingNode = null;
let dragOffset = { x: 0, y: 0 };
let nodeCounter = 0;

function setupWorkflowBuilder() {
  const templates = document.querySelectorAll(".node-template");
  const workspace = document.getElementById("canvas-workspace");
  const exportBtn = document.getElementById("export-json-btn");
  const clearBtn = document.getElementById("clear-canvas-btn");
  const modal = document.getElementById("export-modal");
  const closeModalBtn = document.getElementById("close-modal-btn");
  const copyJsonBtn = document.getElementById("copy-json-btn");

  // Create SVG Canvas for connection lines
  const svgOverlay = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgOverlay.style.position = "absolute";
  svgOverlay.style.top = "0";
  svgOverlay.style.left = "0";
  svgOverlay.style.width = "100%";
  svgOverlay.style.height = "100%";
  svgOverlay.style.pointerEvents = "none";
  svgOverlay.style.zIndex = "1";
  svgOverlay.setAttribute("id", "connection-lines-svg");
  workspace.appendChild(svgOverlay);

  // Click handler to instantly add nodes to the center-ish canvas
  templates.forEach(tpl => {
    tpl.addEventListener("click", () => {
      const type = tpl.getAttribute("data-node-type");
      const name = tpl.getAttribute("data-node-name");
      const icon = tpl.getAttribute("data-icon");
      
      // Place node randomly in the workspace center with spacing
      const count = activeNodes.length;
      const x = 50 + (count * 250) % 700;
      const y = 80 + (Math.floor(count / 3) * 150) % 400;

      createNodeOnCanvas(type, name, icon, x, y);
    });

    // Setup drag start metadata
    tpl.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("node-type", tpl.getAttribute("data-node-type"));
      e.dataTransfer.setData("node-name", tpl.getAttribute("data-node-name"));
      e.dataTransfer.setData("node-icon", e.target.closest(".node-template").getAttribute("data-icon"));
    });
  });

  // Drag and Drop canvas handlers
  workspace.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  workspace.addEventListener("drop", (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("node-type");
    const name = e.dataTransfer.getData("node-name");
    const icon = e.dataTransfer.getData("node-icon");

    if (!type || !name) return;

    const rect = workspace.getBoundingClientRect();
    const x = e.clientX - rect.left - 110; // Offset half node width
    const y = e.clientY - rect.top - 50;   // Offset half node height

    createNodeOnCanvas(type, name, icon, Math.max(10, x), Math.max(10, y));
  });

  // Global Workspace dragging tracker for absolute-positioned elements
  document.addEventListener("mousemove", (e) => {
    if (!draggingNode) return;
    e.preventDefault();
    
    const rect = workspace.getBoundingClientRect();
    let newX = e.clientX - rect.left - dragOffset.x;
    let newY = e.clientY - rect.top - dragOffset.y;

    // Boundary constraints
    newX = Math.max(10, Math.min(newX, workspace.clientWidth - 230));
    newY = Math.max(10, Math.min(newY, workspace.clientHeight - 130));

    draggingNode.style.left = `${newX}px`;
    draggingNode.style.top = `${newY}px`;

    // Update coordinates in activeNodes
    const nodeObj = activeNodes.find(n => n.id === draggingNode.id);
    if (nodeObj) {
      nodeObj.x = newX;
      nodeObj.y = newY;
    }

    drawConnections();
  });

  document.addEventListener("mouseup", () => {
    if (draggingNode) {
      draggingNode.style.zIndex = "10";
      draggingNode = null;
    }
  });

  // Modal events
  exportBtn.addEventListener("click", showExportModal);
  clearBtn.addEventListener("click", clearCanvas);
  closeModalBtn.addEventListener("click", () => modal.classList.remove("active"));
  
  copyJsonBtn.addEventListener("click", () => {
    const code = document.getElementById("modal-code-block").textContent;
    navigator.clipboard.writeText(code).then(() => {
      copyJsonBtn.textContent = "Copied! ✓";
      copyJsonBtn.style.background = "#059669";
      setTimeout(() => {
        copyJsonBtn.textContent = "Copy to Clipboard";
        copyJsonBtn.style.background = "";
      }, 2000);
    });
  });

  // Initial node layout for onboarding visualizer
  spawnDemoWorkflow();
}

function createNodeOnCanvas(type, name, icon, x, y) {
  const workspace = document.getElementById("canvas-workspace");
  nodeCounter++;
  const nodeId = `node-${nodeCounter}`;

  const nodeEl = document.createElement("div");
  nodeEl.className = "canvas-node";
  nodeEl.id = nodeId;
  nodeEl.style.left = `${x}px`;
  nodeEl.style.top = `${y}px`;

  // Custom Input parameter details based on node type
  let paramHtml = "";
  let defaultVal = "";

  if (type === "Trigger") {
    paramHtml = `
      <label style="color: var(--text-secondary); font-size: 0.7rem;">Webhook URL / Cron:</label>
      <input type="text" class="node-input-field" placeholder="https://api.yourdomain/webhook" value="/trigger-event">
    `;
    defaultVal = "/trigger-event";
  } else if (type === "Agent") {
    paramHtml = `
      <label style="color: var(--text-secondary); font-size: 0.7rem;">System Instructions:</label>
      <input type="text" class="node-input-field" placeholder="You are a classifier agent..." value="Analyze the payload and extract key insights.">
    `;
    defaultVal = "Analyze the payload and extract key insights.";
  } else if (type === "Action") {
    paramHtml = `
      <label style="color: var(--text-secondary); font-size: 0.7rem;">Action Target / JSON:</label>
      <input type="text" class="node-input-field" placeholder="Channel ID or endpoint" value="#sales-notifications">
    `;
    defaultVal = "#sales-notifications";
  }

  nodeEl.innerHTML = `
    <button class="node-remove">&times;</button>
    <div class="canvas-node-header">
      <span>${icon}</span>
      <span>${name}</span>
    </div>
    <div class="canvas-node-body">
      ${paramHtml}
    </div>
  `;

  // Node remove handler
  nodeEl.querySelector(".node-remove").addEventListener("click", (e) => {
    e.stopPropagation();
    workspace.removeChild(nodeEl);
    activeNodes = activeNodes.filter(n => n.id !== nodeId);
    drawConnections();
  });

  // Parameter change handler
  const inputField = nodeEl.querySelector(".node-input-field");
  if (inputField) {
    inputField.addEventListener("input", (e) => {
      const nodeObj = activeNodes.find(n => n.id === nodeId);
      if (nodeObj) {
        nodeObj.configValue = e.target.value;
      }
    });
  }

  // Mouse drag handler
  nodeEl.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("node-input-field") || e.target.classList.contains("node-remove")) return;
    draggingNode = nodeEl;
    draggingNode.style.zIndex = "100";
    const rect = nodeEl.getBoundingClientRect();
    dragOffset = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  });

  workspace.appendChild(nodeEl);

  // Save node details
  activeNodes.push({
    id: nodeId,
    type,
    name,
    icon,
    x,
    y,
    configValue: defaultVal
  });

  drawConnections();
}

function drawConnections() {
  const svg = document.getElementById("connection-lines-svg");
  if (!svg) return;
  
  // Clear previous lines
  while (svg.firstChild) {
    svg.removeChild(svg.firstChild);
  }

  if (activeNodes.length < 2) return;

  // Sort nodes sequentially based on X coordinate (left to right flow logic)
  const sorted = [...activeNodes].sort((a, b) => a.x - b.x);

  for (let i = 0; i < sorted.length - 1; i++) {
    const fromNode = sorted[i];
    const toNode = sorted[i + 1];

    // Source exit point (middle right of node)
    const x1 = fromNode.x + 220; // Node width
    const y1 = fromNode.y + 60;  // Half node height

    // Target enter point (middle left of node)
    const x2 = toNode.x;
    const y2 = toNode.y + 60;

    // Draw smooth cubic bezier curve
    const controlOffset = Math.max(50, Math.abs(x2 - x1) * 0.45);
    const pathData = `M ${x1} ${y1} C ${x1 + controlOffset} ${y1}, ${x2 - controlOffset} ${y2}, ${x2} ${y2}`;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", pathData);
    path.setAttribute("stroke", "rgba(139, 92, 246, 0.45)");
    path.setAttribute("stroke-width", "3");
    path.setAttribute("fill", "none");
    path.setAttribute("stroke-dasharray", "4 4");
    
    // Add neon glowing filter shadow logic to the lines
    path.style.filter = "drop-shadow(0px 0px 4px rgba(139, 92, 246, 0.5))";

    svg.appendChild(path);
  }
}

function clearCanvas() {
  const workspace = document.getElementById("canvas-workspace");
  const nodes = workspace.querySelectorAll(".canvas-node");
  nodes.forEach(node => workspace.removeChild(node));
  activeNodes = [];
  drawConnections();
}

function spawnDemoWorkflow() {
  // Clear any existing
  clearCanvas();

  // Create typical: Webhook Trigger -> LLM Evaluator Agent -> Slack Notification Alert
  createNodeOnCanvas("Trigger", "Webhook Trigger", "🔗", 60, 160);
  createNodeOnCanvas("Agent", "LLM Context Agent", "🧠", 360, 160);
  createNodeOnCanvas("Action", "Slack Alert", "💬", 660, 160);
}

function showExportModal() {
  const modal = document.getElementById("export-modal");
  const codeBlock = document.getElementById("modal-code-block");

  // Sort sequentially by X pos
  const sortedFlow = [...activeNodes].sort((a, b) => a.x - b.x);

  const exportObj = {
    workflowName: "Custom Agentic Workflow Pipeline",
    exportTimestamp: new Date().toISOString(),
    nodesCount: sortedFlow.length,
    pipeline: sortedFlow.map((node, index) => ({
      step: index + 1,
      id: node.id,
      type: node.type,
      nodeName: node.name,
      configValue: node.configValue,
      position: { x: node.x, y: node.y },
      nextStep: index < sortedFlow.length - 1 ? sortedFlow[index + 1].id : null
    }))
  };

  codeBlock.textContent = JSON.stringify(exportObj, null, 2);
  modal.classList.add("active");
}
