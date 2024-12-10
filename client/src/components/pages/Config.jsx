import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa o useNavigate para navegação
import styles from './Config.module.css'; // Supondo que o CSS está neste arquivo
import { FaTrashAlt, FaTimesCircle } from 'react-icons/fa'; // Ícones para desativar e cancelar
import NavConfig from "../layout/navConfig";
import NavInferior from "../layout/navInferior";


const ConfigConta = () => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [action, setAction] = useState(null); // 'deactivate' ou 'cancel'
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook para navegação

  const handleDeactivate = () => {
    setAction('deactivate');
    setShowConfirmation(true);
  };

  const handleCancelSubscription = () => {
    setAction('cancel');
    setShowConfirmation(true);
  };

  const confirmAction = () => {
    if (action === 'deactivate') {
      // Lógica para desativar a conta
      setMessage('Sua conta foi desativada com sucesso.');
    } else if (action === 'cancel') {
      // Lógica para cancelar a assinatura
      setMessage('Sua assinatura foi cancelada com sucesso.');
    }
    setShowConfirmation(false); // Fecha a confirmação

    // Redireciona para a página inicial após 2 segundos (para o usuário ver a mensagem)
    setTimeout(() => {
      navigate('/'); // Redireciona para a página inicial
    }, 2000);
  };

  const cancelAction = () => {
    setShowConfirmation(false); // Fecha a confirmação
  };

  return (
    <div>
      <NavConfig/>
      <div className={styles.container}>
        <h2>Configurações da Conta</h2>

        <div className={styles.actions}>
          <div className={styles.action}>
            <button className={styles.deactivate_button} onClick={handleDeactivate}>
              <FaTimesCircle /> Desativar Conta
            </button>
          </div>

          <div className={styles.action}>
            <button className={styles.cancel_button} onClick={handleCancelSubscription}>
              <FaTrashAlt /> Cancelar Assinatura
            </button>
          </div>
        </div>

        {showConfirmation && (
          <div className={styles.confirmation_modal}>
            <h3>Tem certeza que deseja {action === 'deactivate' ? 'desativar' : 'cancelar'} sua conta/assinação?</h3>
            <div className={styles.buttons}>
              <button className={styles.confirm_button} onClick={confirmAction}>
                Confirmar
              </button>
              <button className={styles.cancel_button} onClick={cancelAction}>
                Cancelar
              </button>
            </div>
          </div>
        )}

        {message && (
          <div className={styles.success_message}>
            <p>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ConfigConta;
