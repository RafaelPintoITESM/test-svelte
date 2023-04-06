<script>
    export let users = [];
</script>

<table>
    <thead>
      <tr>
        <th>User Name</th>
        <th>Email</th>
        <th>Password</th>
        <th>ID</th>
        <th>Aggregate ID</th>
        <th>Create Date</th>
        <th>Last Update Date</th>
      </tr>
    </thead>
    <tbody>
      {#each users as user}
        <tr>
          <td>{user.userName}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>{user.id}</td>
          <td>{user.aggregateId}</td>
          <td>{user.createDate}</td>
          <td>{user.lastUpdateDate}</td>
        </tr>
      {:else}
        <tr>
            <td colspan="7" class="text-center">Cargando...</td>
        </tr>
      {/each}
    </tbody>
  </table>