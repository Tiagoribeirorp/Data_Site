import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section style={{ background: "#f4f6f8" }}>
      <div className="container" style={{ textAlign: "center" }}>
        <h2>Plano mensal</h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: 420,
            margin: "50px auto",
            background: "#fff",
            padding: 45,
            borderRadius: 18,
            boxShadow: "0 12px 30px rgba(0,0,0,.12)"
          }}
        >
          <p style={{ fontSize: "1.9rem", marginBottom: 25 }}>
            <strong>A partir de R$ 500 / mês</strong>
          </p>

          <p>Análise personalizada</p>
          <p>Relatórios claros</p>
          <p>Acompanhamento mensal</p>
          <p>Contato direto comigo</p>

          <a
            href="https://wa.me/5516992148107"
            target="_blank"
            className="btn"
            style={{ marginTop: 30, padding: "16px 46px" }}
          >
            Quero conversar
          </a>
        </motion.div>
      </div>
    </section>
  );
}
