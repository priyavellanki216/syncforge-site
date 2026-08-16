/**
 * Throughput Blueprint design: a Swiss-editorial technical dossier with visible
 * process flow, ink-blue surfaces, paper panels, and Forge Signal Orange states.
 */
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Database,
  FileCheck2,
  GitBranch,
  HardDrive,
  Layers3,
  LockKeyhole,
  Network,
  ShieldCheck,
  Terminal,
  TimerReset,
  Workflow,
} from "lucide-react";

const navItems = [
  ["System", "#system"],
  ["Flow", "#flow"],
  ["Protocol", "#protocol"],
  ["Engineering", "#engineering"],
];

const features = [
  {
    number: "01",
    title: "Manifest intelligence",
    description:
      "Recursive scanning builds an indexed view of paths, timestamps, sizes, file types, and streaming content hashes.",
    icon: Layers3,
  },
  {
    number: "02",
    title: "Chunked transport",
    description:
      "Large files move over TCP in bounded pieces. Socket reads and writes are explicitly complete before state advances.",
    icon: Network,
  },
  {
    number: "03",
    title: "Resumable by design",
    description:
      "Interrupted work is persisted at chunk level so reconnects can request missing data instead of starting from zero.",
    icon: TimerReset,
  },
  {
    number: "04",
    title: "Verified completion",
    description:
      "Temporary writes become destination files only after size and hash validation, followed by an atomic rename.",
    icon: ShieldCheck,
  },
];

const protocolTickets = [
  ["01", "HELLO", "session negotiation"],
  ["02", "MANIFEST_REQUEST", "directory state query"],
  ["03", "FILE_METADATA", "path + integrity envelope"],
  ["04", "FILE_CHUNK", "bounded byte range"],
  ["05", "TRANSFER_RESUME", "missing chunk query"],
  ["06", "SYNC_COMPLETE", "verified state summary"],
];

const engineeringRows = [
  ["Directory scan", "O(F)", "File metadata is gathered with recursive traversal."],
  ["Content hashing", "O(B)", "Files are read incrementally; whole-file RAM loads are avoided."],
  ["Manifest comparison", "~ O(F)", "Indexed lookups avoid pairwise file comparisons."],
  ["File transfer", "O(B / chunk)", "Work is modeled as bounded chunks with persisted state."],
];

function SignalMark({ className = "" }: { className?: string }) {
  return <img className={className} src="/manus-storage/syncforge-mark_52f10980.png" alt="SyncForge mark" />;
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="SyncForge home">
          <SignalMark className="brand-mark" />
          <span className="brand-wordmark">SYNCFORGE</span>
          <span className="brand-context">/ SYSTEMS PROJECT</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>
        <a href="#engineering" className="topbar-cta">
          Engineering notes <ArrowUpRight size={15} />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-microhero" aria-hidden="true">
            <span>01 / Incremental synchronization</span>
            <span className="micro-line" />
            <span>POSIX · C++17 · TCP/IP</span>
          </div>
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light">HIGH-PERFORMANCE FILE SYNCHRONIZATION ENGINE</p>
            <h1 id="hero-title">
              Move the delta.
              <br />
              <em>Verify the result.</em>
            </h1>
            <p className="hero-summary">
              SyncForge is a C++17 systems project for incremental directory synchronization—designed around manifests, bounded concurrent transfers, persisted recovery, and content verification.
            </p>
            <div className="hero-actions">
              <a className="command-button command-button-primary" href="#system">
                Explore the system <ArrowDownRight size={19} />
              </a>
              <a className="command-button command-button-quiet" href="#protocol">
                View protocol <ChevronRight size={18} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-scanline" aria-hidden="true" />
            <img
              className="hero-art"
              src="/manus-storage/syncforge-hero-console_1e180f82.png"
              alt="Abstract SyncForge transfer console showing files flowing through a manifest to a remote vault"
            />
            <div className="hero-status hero-status-top">
              <span className="status-dot status-dot-cyan" />
              <span>MANIFEST INDEXED</span>
            </div>
            <div className="hero-status hero-status-bottom">
              <span className="status-dot status-dot-orange" />
              <span>CHUNKS IN FLIGHT</span>
            </div>
            <div className="hero-figure-label">
              <span>FIG. 01</span>
              <span>TRANSFER PATH / CONCEPTUAL</span>
            </div>
          </div>

          <div className="hero-footer" aria-label="Project technologies">
            <span>C++17</span><span>STD::THREAD</span><span>SQLITE</span><span>SHA-256</span><span>CMAKE</span>
          </div>
        </section>

        <section className="manifest-strip" aria-label="Transfer command sample">
          <div className="section-marker"><span>01</span><span>COMMAND SURFACE</span></div>
          <code><span className="terminal-prompt">$</span> syncforge sync ./source 10.0.0.12:9000 <span className="terminal-caret">_</span></code>
          <div className="strip-state"><span className="status-dot status-dot-cyan" /> SAFE MODE / NO SILENT DELETE</div>
        </section>

        <section className="dossier-section" id="system" aria-labelledby="system-heading">
          <aside className="section-rail" aria-hidden="true">
            <span className="rail-number">02</span>
            <span className="rail-line" />
            <span className="rail-label">SYSTEM / 4 CAPABILITIES</span>
          </aside>
          <div className="system-intro">
            <p className="eyebrow">A DELIBERATE TRANSFER CONTRACT</p>
            <h2 id="system-heading">A sync engine should make every state transition visible.</h2>
            <p className="large-copy">SyncForge is structured to show the engineering behind a reliable file sync path—not hide it behind a one-command file copy. Every major component has a defined responsibility, boundary, and recovery story.</p>
          </div>
          <div className="feature-grid">
            {features.map(({ number, title, description, icon: Icon }) => (
              <article className="feature-card" key={number}>
                <div className="feature-head"><span>{number}</span><Icon size={23} strokeWidth={1.6} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="feature-arrow"><ArrowDownRight size={20} /></span>
              </article>
            ))}
          </div>
        </section>

        <section className="architecture-section" aria-labelledby="architecture-heading">
          <div className="architecture-heading">
            <p className="eyebrow eyebrow-light">A BOUNDED, OBSERVABLE PATH</p>
            <h2 id="architecture-heading">From local tree to validated remote state.</h2>
            <p>Client-side discovery and scheduling meet a server that receives, validates, persists, and safely promotes files only when their integrity checks are complete.</p>
          </div>
          <div className="architecture-layout">
            <div className="architecture-figure">
              <img src="/manus-storage/syncforge-architecture_7a5a418c.png" alt="Conceptual architecture showing client, SQLite metadata, and remote filesystem connected by data paths" />
              <div className="figure-caption"><span>FIG. 02</span><span>CLIENT / SERVER / PERSISTENCE</span></div>
            </div>
            <div className="architecture-spec">
              <div className="spec-row"><HardDrive size={21} /><div><span>CLIENT</span><p>Scans directories, produces manifests, schedules transfer work, and detects changes through indexed comparison.</p></div></div>
              <div className="spec-row"><Database size={21} /><div><span>STATE</span><p>Tracks files, transfers, sessions, and chunks with transactions designed to preserve restartable work.</p></div></div>
              <div className="spec-row"><FileCheck2 size={21} /><div><span>SERVER</span><p>Receives bounded writes, validates file size and content hash, then promotes with atomic rename.</p></div></div>
              <a href="#flow" className="text-link">Trace the synchronization flow <ArrowDownRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="flow-section" id="flow" aria-labelledby="flow-heading">
          <div className="flow-heading">
            <p className="eyebrow">THE ENGINEERING LOOP</p>
            <h2 id="flow-heading">Designed to carry both data and proof.</h2>
          </div>
          <ol className="flow-path">
            <li><span className="flow-index">01</span><div className="flow-icon"><GitBranch size={23} /></div><div><h3>Scan</h3><p>Traverse without loading entire files.</p></div></li>
            <li><span className="flow-index">02</span><div className="flow-icon"><Layers3 size={23} /></div><div><h3>Compare</h3><p>Classify new, modified, unchanged, and deleted states.</p></div></li>
            <li><span className="flow-index">03</span><div className="flow-icon"><Workflow size={23} /></div><div><h3>Transfer</h3><p>Schedule bounded chunks across a controlled worker pool.</p></div></li>
            <li><span className="flow-index">04</span><div className="flow-icon"><LockKeyhole size={23} /></div><div><h3>Verify</h3><p>Validate size and hash, then atomically promote.</p></div></li>
          </ol>
          <div className="policy-callout"><span>SYNC POLICY</span><p>Destructive operations are explicit. Remote-only files are surfaced as a conflict or deletion candidate according to configured policy—never silently removed.</p></div>
        </section>

        <section className="protocol-section" id="protocol" aria-labelledby="protocol-heading">
          <div className="protocol-intro">
            <p className="eyebrow eyebrow-light">TCP APPLICATION PROTOCOL</p>
            <h2 id="protocol-heading">No message assumes a single send or receive.</h2>
            <p>A framed protocol carries type, payload size, and error context. Every inbound size is bounded before allocation; every socket operation handles partial progress.</p>
            <div className="protocol-rule"><span>HEADER</span><span>TYPE</span><span>PAYLOAD SIZE</span><span>PAYLOAD</span></div>
          </div>
          <div className="protocol-ticket-grid">
            {protocolTickets.map(([number, title, description]) => (
              <div className="protocol-ticket" key={number}>
                <span>{number}</span><strong>{title}</strong><em>{description}</em><ChevronRight size={17} />
              </div>
            ))}
          </div>
        </section>

        <section className="resume-section" aria-labelledby="resume-heading">
          <div className="resume-visual">
            <img src="/manus-storage/syncforge-chunk-transfer_9cb86cb8.png" alt="Abstract diagram of a file being moved in chunks with a visible resume gap" />
            <div className="resume-tag"><span>RECONNECT</span><b>Resume missing chunks</b></div>
          </div>
          <div className="resume-copy">
            <p className="eyebrow">RECOVERY WITHOUT WASTE</p>
            <h2 id="resume-heading">Interrupted does not mean abandoned.</h2>
            <p>Transfer state is modeled at the file and chunk level. A reconnect can query completed chunks, retry transient errors with bounded exponential backoff, and continue the work that is still missing.</p>
            <div className="resume-list">
              <div><Check size={17} /> Bounded retry strategy</div>
              <div><Check size={17} /> SQLite-backed transfer state</div>
              <div><Check size={17} /> Temporary writes + atomic rename</div>
            </div>
          </div>
        </section>

        <section className="engineering-section" id="engineering" aria-labelledby="engineering-heading">
          <aside className="section-rail engineering-rail" aria-hidden="true"><span className="rail-number">03</span><span className="rail-line" /><span className="rail-label">ENGINEERING / EVIDENCE</span></aside>
          <div className="engineering-heading">
            <p className="eyebrow">COMPLEXITY, TESTING &amp; PERFORMANCE</p>
            <h2 id="engineering-heading">The claim is the implementation—not a made-up graph.</h2>
            <p className="large-copy">The project brief calls for measured benchmarks across worker counts and workloads. Until those benchmark executions are recorded, this site presents the methodology and expected complexity rather than invented throughput figures.</p>
          </div>
          <div className="complexity-table-wrap">
            <table className="complexity-table">
              <thead><tr><th>Operation</th><th>Target cost</th><th>Engineering note</th></tr></thead>
              <tbody>{engineeringRows.map(([operation, complexity, note]) => <tr key={operation}><td>{operation}</td><td><code>{complexity}</code></td><td>{note}</td></tr>)}</tbody>
            </table>
          </div>
          <div className="benchmark-card">
            <div><span className="benchmark-kicker">BENCHMARK STATUS</span><h3>Awaiting measured local runs.</h3><p>Planned comparisons: sequential, 2, 4, and 8 workers across small, medium, large, and mixed file sets.</p></div>
            <div className="benchmark-chart" aria-label="Benchmark visual placeholder showing no measured data">
              <span>NO RESULTS YET</span>
              <i style={{ height: "30%" }} /><i style={{ height: "52%" }} /><i style={{ height: "41%" }} /><i style={{ height: "69%" }} />
            </div>
          </div>
        </section>

        <section className="final-section" aria-labelledby="final-heading">
          <div className="final-mark-wrap"><SignalMark className="final-mark" /></div>
          <div>
            <p className="eyebrow eyebrow-light">SYSTEMS PORTFOLIO PROJECT</p>
            <h2 id="final-heading">A reliable sync path is built one explicit decision at a time.</h2>
          </div>
          <a href="#top" className="final-command"><Terminal size={18} /> Return to entrypoint <ArrowUpRight size={18} /></a>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-brand"><SignalMark className="footer-mark" /><span>SYNCFORGE</span></div>
        <p>High-Performance Incremental File Synchronization Engine</p>
        <span>CONCEPT SITE / 2026</span>
      </footer>
    </div>
  );
}
