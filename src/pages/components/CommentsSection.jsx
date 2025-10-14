import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../../firebase/config"
import "./CommentsSection.css";

const CommentsSection = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const q = query(
          collection(db, "responses"),
          orderBy("createdAt", "desc"),
          limit(10)
        );
        const querySnapshot = await getDocs(q);
        const fetchedComments = querySnapshot.docs
          .map(doc => {
            const data = doc.data();
            // Accedemos al texto libre del survey (última pregunta)
            const lastAnswer = data.answers?.q8?.text || "";
            console.log(lastAnswer)
            return {
              id: doc.id,
              user: "Anónimo",
              comment: lastAnswer.trim(),
              createdAt: data.createdAt?.toDate() || new Date(),
            };
          })
          .filter(item => item.comment !== "");

        setComments(fetchedComments);
      } catch (e) {
        console.error("Error al cargar comentarios: ", e);
      }
    };

    fetchComments();
  }, []);

  return (
    <section className="comments-section" id="comments">
      <h1 className="comments-title">💀 Voces desde el más allá</h1>
      <p className="comments-intro">
        Estas son algunas de las experiencias y mensajes que dejaron los invitados del evento anterior.
      </p>

      <div className="comments-container">
        {comments.length > 0 ? (
          comments.map((c, index) => (
            <div key={c.id} className="comment-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <p className="comment-text">“{c.comment}”</p>
              <span className="comment-user">– {c.user}</span>
            </div>
          ))
        ) : (
          <p className="comments-empty">Aún no hay comentarios... 🕯️</p>
        )}
      </div>
    </section>
  );
};

export default CommentsSection