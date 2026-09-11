function FilterButtons({ filter, setFilter }) {
    return (
  <div>
    <button
  onClick={() => setFilter("all")}
  style={{
    fontWeight: filter === "all" ? "bold" : "normal",
  }}
>
  All
</button>

    <button
  onClick={() => setFilter("pending")}
  style={{
    fontWeight: filter === "pending" ? "bold" : "normal",
  }}
>
      Pending
    </button>

   <button
  onClick={() => setFilter("completed")}
  style={{
    fontWeight: filter === "completed" ? "bold" : "normal",
  }}
>
  Completed
</button>
  </div>
);
}
export default FilterButtons;
