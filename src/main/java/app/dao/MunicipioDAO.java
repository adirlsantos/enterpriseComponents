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
@Repository("MunicipioDAO")
@Transactional(transactionManager="app-TransactionManager")
public interface MunicipioDAO extends JpaRepository<Municipio, java.lang.String> {

  /**
   * Obtém a instância de Municipio utilizando os identificadores
   * 
   * @param id
   *          Identificador 
   * @return Instância relacionada com o filtro indicado
   * @generated
   */    
  @Query("SELECT entity FROM Municipio entity WHERE entity.id = :id")
  public Municipio findOne(@Param(value="id") java.lang.String id);

  /**
   * Remove a instância de Municipio utilizando os identificadores
   * 
   * @param id
   *          Identificador 
   * @return Quantidade de modificações efetuadas
   * @generated
   */    
  @Modifying
  @Query("DELETE FROM Municipio entity WHERE entity.id = :id")
  public void delete(@Param(value="id") java.lang.String id);



  /**
   * OneToMany Relation
   * @generated
   */
  @Query("SELECT entity FROM Cliente entity WHERE entity.municipio.id = :id")
  public Page<Cliente> findCliente(@Param(value="id") java.lang.String id, Pageable pageable);
  /**
   * ManyToOne Relation
   * @generated
   */
  @Query("SELECT entity.estado FROM Cliente entity WHERE entity.municipio.id = :id")
  public Page<Estado> listEstado(@Param(value="id") java.lang.String id, Pageable pageable);

  /**
   * ManyToOne Relation Delete
   * @generated
   */
  @Modifying
  @Query("DELETE FROM Cliente entity WHERE entity.municipio.id = :instanceId AND entity.estado.id = :relationId")
  public int deleteEstado(@Param(value="instanceId") java.lang.String instanceId, @Param(value="relationId") java.lang.String relationId);

  /**
   * Foreign Key estado
   * @generated
   */
  @Query("SELECT entity FROM Municipio entity WHERE entity.estado.id = :id")
  public Page<Municipio> findMunicipiosByEstado(@Param(value="id") java.lang.String id, Pageable pageable);

}
