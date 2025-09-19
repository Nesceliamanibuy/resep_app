import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps) return alert("Lengkapi semua field!");

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      steps,
      image: "https://source.unsplash.com/400x300/?food," + title, // gambar dummy
    };

    setRecipes([...recipes, newRecipe]);
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-green-600 text-white p-4 shadow-md flex justify-between">
        <h1 className="text-xl font-bold">🍲 ResepKu</h1>
        <p className="italic">Simpan & Temukan resep favoritmu</p>
      </nav>

      {/* Form Tambah Resep */}
      <section className="max-w-lg mx-auto mt-10 bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Tambah Resep Baru</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Judul Resep"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Bahan (pisahkan dengan koma)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <textarea
            placeholder="Langkah-langkah"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Simpan
          </button>
        </form>
      </section>

      {/* Daftar Resep */}
      <section className="max-w-6xl mx-auto mt-12 px-4">
        <h2 className="text-2xl font-bold mb-6">📖 Daftar Resep</h2>
        {recipes.length === 0 ? (
          <p className="text-gray-500 italic">Belum ada resep yang ditambahkan.</p>
        ) : (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
            {recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg">{recipe.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Bahan:</strong> {recipe.ingredients.join(", ")}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    <strong>Langkah:</strong> {recipe.steps}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-12 p-4 text-center text-gray-500">
        © 2025 ResepKu | Dibuat dengan ❤️ dan 🍜
      </footer>
    </div>
  );
}

export default App;
