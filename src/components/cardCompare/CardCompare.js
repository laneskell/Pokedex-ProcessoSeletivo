const CardComparePokemon = ({ pokemon }) => {
  return (
    <div className="cardComparePokemon">
      <h3>{pokemon.name}</h3>
      <img
        src={pokemon && pokemon.sprites.other["official-artwork"].front_default}
        alt={`imagem do pokemon ${pokemon.name}`}
      />
      <>
        <h2>Poderes</h2>
        {pokemon &&
          pokemon.stats.map((stat) => {
            return (
              <p key={stat.stat.name}>
                <strong>{stat.stat.name}: </strong>
                {stat.base_stat}
              </p>
            );
          })}
        {pokemon &&
          pokemon.types.map((type) => {
            return <p key={type.type.name}>{type.type.name}</p>;
          })}
        <h2>Ataques</h2>
        {pokemon &&
          pokemon.moves.map((move, index) => {
            return index < 5 && <p key={move.move.name}>{move.move.name}</p>;
          })}
      </>
    </div>
  );
};
export default CardComparePokemon;
