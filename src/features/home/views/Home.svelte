<script>
    import { onMount } from 'svelte';
    import userRepository from '../services/user.repository';
    import HomeTableComponente from './HomeComponents/HomeTableComponente.svelte';
    import Modal from '../../../shared/components/Modal.svelte';

	let showModal = false;
    let users = []
    let user = {}
    let messageAPI = ''
    const columns = ['userName', 'email', 'password'];
    let getUsers = async ()=>{
        users = await userRepository.getUsers()
    }
    async function handleSubmit() {
        showModal = false;
        userRepository.addUser(user)
        .finally(()=>{
            
        user = {}
        showModal = false
        getUsers()    
        })
        .catch((error)=>{
            messageAPI = error;
            showModal = true
        })
    }
        
    onMount(async()=>{
        getUsers()
    })
</script>

<header>
    <h1>Mi sitio web 2</h1>
</header>

<main>

    <section>
        <h2>Usuarios</h2>
        
<button class="btn btn-success" on:click={() => {showModal = true; }}>
	+
</button>
        
          <HomeTableComponente users={users}/>
        </section>
</main>


<Modal bind:showModal>
	<h2 slot="header">
		Crear usuario
	</h2>
    {#if messageAPI}
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Error!</strong>{messageAPI}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    {/if}
	<form on:submit|preventDefault={handleSubmit}>
        {#each columns as column}
          <div>
            <label for={column} class="form-label">{column}</label>
            <input type="text" id={column} bind:value={user[column]} class="form-control"/>
          </div>
        {/each}
        <button type="submit" class="btn btn-primary mt-4 col-12">Guardar cambios</button>
      </form>
</Modal>

<footer>
    <p>&copy; 2023 - Todos los derechos reservados</p>
</footer>