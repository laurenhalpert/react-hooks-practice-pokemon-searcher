import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ pokemons, onNewPokemon }) {
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [front, setFront] = useState("");
  const [back, setBack] = useState("");
  function handleSubmit(e) {
    e.preventDefault()
    const newPokemonObj= {
      name: name,
      hp: hp,
      sprites: {
        front: front,
        back: back
      }
    }
    fetch ("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemonObj)
    })
    .then(r=>r.json())
    .then(newPokemonObj => onNewPokemon(newPokemonObj))

  }
  function handleChange(event, setter) {
    setter(event.target.value)
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(event, setter)=> handleChange(event, setName)} value={name}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(event, setter)=> handleChange(event, setHp)} value={hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(event, setter)=> handleChange(event, setFront)}
            value={front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(event, setter)=> handleChange(event, setBack)}
            value={back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
