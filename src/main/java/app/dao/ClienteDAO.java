package app.dao;

import app.entity.*;
import java.util.*;
import org.springframework.stereotype.*;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.domain.*;
import org.springframework.data.repository.query.*;
import org.springframework.transaction.annotation.*; 


/**
 * Realiza operação de Create, Read, Update e Delete no banco de dados.
 * Os métodos de create, edit, delete e outros estão abstraídos no JpaRepository
 * 
 * @see org.springframework.data.jpa.repository.JpaRepository
 * 
 * @generated
 */
@Repository("ClienteDAO")
@Transactional(transactionManager="app-TransactionManager")
public interface ClienteDAO extends JpaRepository<Cliente, java.lang.String> {

  /**
   * Obtém a instância de Cliente utilizando os identificadores
   * 
   * @param id
   *          Identificador 
   * @return Instância relacionada com o filtro indicado
   * @generated
   */    
  @Query("SELECT entity FROM Cliente entity WHERE entity.id = :id")
  public Cliente findOne(@Param(value="id") java.lang.String id);

  /**
   * Remove a instância de Cliente utilizando os identificadores
   * 
   * @param id
   *          Identificador 
   * @return Quantidade de modificações efetuadas
   * @generated
   */    
  @Modifying
  @Query("DELETE FROM Cliente entity WHERE entity.id = :id")
  public void delete(@Param(value="id") java.lang.String id);



  /**
   * Foreign Key municipio
   * @generated
   */
  @Query("SELECT entity FROM Cliente entity WHERE entity.municipio.id = :id")
  public Page<Cliente> findClientesByMunicipio(@Param(value="id") java.lang.String id, Pageable pageable);

  /**
   * Foreign Key estado
   * @generated
   */
  @Query("SELECT entity FROM Cliente entity WHERE entity.estado.id = :id")
  public Page<Cliente> findClientesByEstado(@Param(value="id") java.lang.String id, Pageable pageable);

}
