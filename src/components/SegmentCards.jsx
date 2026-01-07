import { motion } from "framer-motion";
import { segments } from "../data/segments";

export default function SegmentCards() {
  return (
    <section id="setores">
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: 60 }}>
          Como a análise de dados pode ajudar seu setor
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 30
          }}
        >
          {segments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: "#fff",
                padding: "40px",
                borderRadius: "18px",
                boxShadow: "0 14px 35px rgba(0,0,0,0.08)"
              }}
            >
              <div style={{ fontSize: "2.4rem", marginBottom: 12 }}>
                {item.icon}
              </div>
              <h3 style={{ marginBottom: 12 }}>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
