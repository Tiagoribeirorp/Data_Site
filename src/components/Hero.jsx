import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #e8f7f5, #f4fbfa)",
        display: "flex",
        alignItems: "center",
        padding: "0 20px"
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "80px",
          alignItems: "center"
        }}
      >
        {/* CARD ESQUERDO */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="card"
          style={{ textAlign: "center" }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              margin: "0 auto 25px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #00AE9D, #4fd1c5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem"
            }}
          >
            📊
          </div>

          <p className="muted" style={{ marginBottom: 6 }}>
            Analista de Dados
          </p>

          <h3 style={{ marginBottom: 18 }}>
            Tiago Ribeiro
          </h3>

          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "center",
              flexWrap: "wrap"
            }}
          >
            <span className="tag">#dados</span>
            <span className="tag">#decisão</span>
            <span className="tag">#automação</span>
          </div>
        </motion.div>

        {/* TEXTO DIREITO */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        >
          <p style={{ color: "var(--primary)", marginBottom: 12 }}>
            dados → clareza → decisão
          </p>

          <h1
            style={{
              fontSize: "3.2rem",
              fontWeight: 800,
              lineHeight: 1.15,
              marginBottom: 25
            }}
          >
            Clareza nos números para
            <br />
            decisões mais seguras
          </h1>

          <p
            style={{
              fontSize: "1.15rem",
              color: "var(--text)",
              maxWidth: 520,
              marginBottom: 40
            }}
          >
            Ajudo empresas de qualquer segmento a organizar e analisar
            seus dados para tomar decisões com mais confiança
            e menos achismo.
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap"
            }}
          >
            <a
              href="https://wa.me/5516992148107"
              target="_blank"
              className="btn"
            >
              Falar comigo
            </a>

            <a
              href="#setores"
              className="link-secondary"
            >
              Ver como ajudo empresas →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
