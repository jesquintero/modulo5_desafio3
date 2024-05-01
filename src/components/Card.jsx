const Card = ({ pokemon }) => {  
    if (!pokemon || !pokemon.stats || !pokemon.type) {
      return <div>Ese Pokemon no existe</div>;
    }
  
    return (
        <div className="card">
            <div className="d-flex">
                <img src={pokemon.img} alt={pokemon.name} width={300} />
                <div className="card-body">
                <div className="card-tittle"><h4>{pokemon.name}</h4></div>
                <div className="card-body">
                <ul>
                    {pokemon.stats.map((stat, index) => (
                    <li key={index}>
                        {stat.stat.name}: {stat.base_stat}
                    </li>
                    ))}
                </ul>
                <h4>Tipo:</h4>
                <ul>
                    {pokemon.type.map((type, index) => (
                    <li key={index}>{type.type.name}</li>
                    ))}
                </ul>
                </div>
                </div>
            </div>
        </div>
    );
  };
  
  export default Card;