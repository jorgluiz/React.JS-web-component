import React from "react";
import { useForm } from "react-hook-form"

import Layout from "../../components/layout"
import { sendPost } from "../../utils/services/api";

import "./Posts.css"

const PostsPage = () => {
	const { handleSubmit, register, setValue } = useForm()


	const getData = (sendPosts) => {
		sendPost(sendPosts) // sendPost API
	}

	// submit form
	const onSubmit = (data) => {

		getData({
			name: data.name,
			nascimento: data.nascimento,
			mae: data.mae,
			sus: data.sus,
			cep: data.cep,
			bairro: data.bairro,
			endereco: data.endereco,
			descricao: data.descricao,
			sexo: data.sexo,
			dataemissao: data.dataemissao,
			rg: data.rg,
			cpf: data.cpf,
			cidade: data.cidade,
			uf: data.uf,
			fone: data.fone
		})
		setValue('name', data.name = "")
		setValue('nascimento', data.nascimento = "")
		setValue('mae', data.mae = "")
		setValue('sus', data.sus = "")
		setValue('cep', data.cep = "")
		setValue('bairro', data.bairro = "")
		setValue('endereco', data.endereco = "")
		setValue('descricao', data.descricao = "")
		setValue('sexo', data.sexo = "")
		setValue('dataemissao', data.dataemissao = "")
		setValue('rg', data.rg = "")
		setValue('cpf', data.cpf = "")
		setValue('cidade', data.cidade = "")
		setValue('uf', data.uf = "")
		setValue('fone', data.fone = "")
	}

	// checkCEP
	const checkCEP = async (e) => {
		const cep = e.target.value
		const resp = await fetch(`https://viacep.com.br/ws/${cep}/json`)
		const data = await resp.json()

		setValue('cidade', data.localidade)
		setValue('bairro', data.bairro)
		setValue('endereco', data.logradouro)
		setValue('uf', data.uf)
		setValue('fone', `(${data.ddd})`)

	}

	return (
		<Layout>
			<form className="flex-row-form" onSubmit={handleSubmit(onSubmit)}>
				<div className="flex1-form">
					<label htmlFor="Full name">Full name:</label>
					<input className="posts1" type="text" {...register("name")} required />

					<label htmlFor="Date of birth">Date of birth:</label>
					<input className="posts2" type="text" {...register("nascimento")}  required />

					<label htmlFor="mother's name">Mother's name:</label>
					<input className="posts3" type="text" {...register("mae")}  required />

					<label htmlFor="sus card">SUS card:</label>
					<input className="posts4" type="text" {...register("sus")} required />

					<label htmlFor="Zip code">Zip code:</label>                                            {/* eventlistener*/}
					<input className="posts5" type="search" {...register("cep")} onBlur={checkCEP} maxlength="9" id="cep" placeholder="Example: 0000-000" required />

					<label htmlFor="Neighborhood">Neighborhood:</label>
					<input className="posts6" type="text" {...register("bairro")} id="bairro" required />

					<label htmlFor="Address">Address:</label>
					<input className="posts7" type="text" {...register("endereco")} id="logradouro" required />


					{/* <!-- textarea --> */}
					<label htmlFor="Description">Description:</label>
					<textarea className="posts7" cols="30" rows="10" {...register("descricao")} style={{ resize: "none" }} required></textarea>
				</div>

				<div className="flex2-form">
					<label htmlFor="sex">Sex:</label>
					<select className="posts8" type="text"  {...register("sexo")} required>
						<option></option>
						<option>M</option>
						<option>F</option>
					</select>


					<label htmlFor="Issue date">Issue date:</label>
					<input className="posts9" type="text" {...register("dataemissao")} required />

					<label htmlFor="RG">RG:</label>
					<input className="posts10" type="text"  {...register("rg")} required />

					<label htmlFor="CPF">CPF:</label>
					<input className="posts11" type="text"  {...register("cpf")} required />

					<label htmlFor="City">City:</label>
					<input className="posts12" type="text"  {...register("cidade")} required />

					<label htmlFor="UF">UF:</label>
					<input className="posts13" type="text"  {...register("uf")} required />

					<label htmlFor="phone">Phone:</label>
					<input className="posts14" type="text"  {...register("fone")} required />

					{/* <!-- button submit --> */}
					<button className="button-env" type="submit">SEND</button>

				</div>
			</form>
		</Layout>
	)
}

export default PostsPage