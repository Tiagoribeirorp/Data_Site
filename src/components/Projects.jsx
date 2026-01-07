import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section>
      <div className="container">
        <h2 style={{ textAlign: "center", marginBottom: 60 }}>
          Experiência aplicada em dados e automação
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 30
          }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: "#fff",
                padding: 35,
                borderRadius: 18,
                boxShadow: "0 14px 35px rgba(0,0,0,0.08)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <div>
                <h3 style={{ marginBottom: 12 }}>{project.title}</h3>
                <p style={{ marginBottom: 15 }}>{project.description}</p>
                <small style={{ opacity: 0.7 }}>{project.tech}</small>
              </div>

              <a
                href={project.link}
                target="_blank"
                style={{
                  marginTop: 20,
                  color: "#00AE9D",
                  fontWeight: "bold",
                  textDecoration: "none"
                }}
              >
                Ver projeto →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
