<?php
	/*
	$_GET;
	echo $_GET['email'];
	echo $_GET['senha'];
	*/

	session_start();

	$usuario_autenticado = false;
	$usuarios_id = null;
	$usuario_perfil_id = null;

	$perfis = array(1 => 'Admnistrativo', 2=> 'Usuário');

	$usuarios_app = array(
		array('id' => 1, 'email' => 'admteste@com.br', 'senha' => '1234', 'perfil_id' => 1),
		array('id' => 2, 'email' => 'userteste@com.br', 'senha' => '1234', 'perfil_id' => 2),
	);

	foreach ($usuarios_app as $user) {	

		if (($user['email'] == $_POST['email']) && ($user['senha'] == $_POST['senha'])) {
			$usuario_autenticado = true;
			$usuarios_id = $user['id'];
			$usuario_perfil_id = $user['perfil_id'];
		}

	}

	if ($usuario_autenticado) {
		echo 'Usuário autenticado';
		$_SESSION['autenticado'] = 'SIM';
		$_SESSION['id'] = $usuarios_id;
		$_SESSION['perfil_id'] = $usuario_perfil_id;
		header('Location: home.php');
	} else {
		header('Location: index.php?login=erro');
		$_SESSION['autenticado'] = 'NAO';
	}

?>