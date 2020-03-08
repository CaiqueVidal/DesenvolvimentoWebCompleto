<?php
	
	session_start();
	//remover índices do array de sessão
	//unset($_SESSION['autenticado']); //para remover o índice apenas se existir
	
	//destruir a variável de sessão
	session_destroy();
	header('Location: index.php');

?>