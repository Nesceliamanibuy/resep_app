import { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps)
      return alert("Lengkapi semua field!");

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps,
      category: "🍲 Umum",
      image: "https://source.unsplash.com/400x300/?food," + title,
    };

    setRecipes([...recipes, newRecipe]);
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      {/* Navbar */}
      <nav className="bg-green-600 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">🍴 ResepKu</h1>
        <button className="bg-white text-green-700 px-4 py-2 rounded-xl font-semibold hover:bg-gray-100 transition">
          🌙 Mode
        </button>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-12 bg-[url('https://source.unsplash.com/1600x400/?kitchen,food')] bg-cover bg-center text-white shadow-lg">
        <h2 className="text-4xl font-extrabold drop-shadow-md">
          Temukan & Simpan Resep Favoritmu
        </h2>
        <p className="mt-2 text-lg drop-shadow-sm">
          Dari dapurmu untuk dunia 🌍
        </p>
      </section>

      {/* Form Tambah Resep */}
      <section className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">➕ Tambah Resep Baru</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Judul Resep"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Bahan (pisahkan dengan koma)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Langkah-langkah"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Simpan Resep
          </button>
        </form>
      </section>

      {/* Daftar Resep */}
      <section className="max-w-6xl mx-auto mt-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-green-700">📖 Daftar Resep</h2>
        {recipes.length === 0 ? (
          <p className="text-gray-500 italic">Belum ada resep ditambahkan.</p>
        ) : (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {recipes.map((recipe) => (
              <motion.div
                key={recipe.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] hover:shadow-xl transition"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded-lg">
                    {recipe.category}
                  </span>
                  <h3 className="font-bold text-xl mt-2">{recipe.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Bahan:</strong> {recipe.ingredients.join(", ")}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Langkah:</strong> {recipe.steps}
                  </p>
                  <button className="mt-3 bg-pink-100 text-pink-600 px-3 py-1 rounded-lg hover:bg-pink-200">
                    ❤️ Favorit
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-12 p-4 text-center text-gray-600 bg-gray-100">
        © 2025 ResepKu | Dibuat dengan ❤️ oleh Kamu
      </footer>
    </div>
  );
}

export default App;
