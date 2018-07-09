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
@Repository("InstrutorDAO")
@Transactional(transactionManager="app-TransactionManager")
public interface InstrutorDAO extends JpaRepository<Instrutor, java.lang.String> {

  /**
   * Obtém a instância de Instrutor utilizando os identificadores
   * 
   * @param id
   *          Identificador 
   * @return Instância relacionada com o filtro indicado
   * @generated
   */    
  @Query("SELECT entity FROM Instrutor entity WHERE entity.id = :id")
  public Instrutor findOne(@Param(value="id") java.lang.String id);

  /**
   * Remove a instância de Instrutor utilizando os identificadores
   * 
   * @param id
   *          Identificador 
   * @return Quantidade de modificações efetuadas
   * @generated
   */    
  @Modifying
  @Query("DELETE FROM Instrutor entity WHERE entity.id = :id")
  public void delete(@Param(value="id") java.lang.String id);



  /**
   * OneToMany Relation
   * @generated
   */
  @Query("SELECT entity FROM CursoInstrutor entity WHERE entity.instrutor.id = :id")
  public Page<CursoInstrutor> findCursoInstrutor(@Param(value="id") java.lang.String id, Pageable pageable);

  /**
   * OneToMany Relation
   * @generated
   */
  @Query("SELECT entity FROM Turma entity WHERE entity.instrutorSel.id = :id")
  public Page<Turma> findTurma(@Param(value="id") java.lang.String id, Pageable pageable);
  /**
   * ManyToOne Relation
   * @generated
   */
  @Query("SELECT entity.curso FROM CursoInstrutor entity WHERE entity.instrutor.id = :id")
  public Page<Curso> listCurso(@Param(value="id") java.lang.String id, Pageable pageable);

  /**
   * ManyToOne Relation Delete
   * @generated
   */
  @Modifying
  @Query("DELETE FROM CursoInstrutor entity WHERE entity.instrutor.id = :instanceId AND entity.curso.id = :relationId")
  public int deleteCurso(@Param(value="instanceId") java.lang.String instanceId, @Param(value="relationId") java.lang.String relationId);
  /**
   * ManyToOne Relation
   * @generated
   */
  @Query("SELECT entity.cursoSel FROM Turma entity WHERE entity.instrutorSel.id = :id")
  public Page<Curso> listCurso_2(@Param(value="id") java.lang.String id, Pageable pageable);

  /**
   * ManyToOne Relation Delete
   * @generated
   */
  @Modifying
  @Query("DELETE FROM Turma entity WHERE entity.instrutorSel.id = :instanceId AND entity.cursoSel.id = :relationId")
  public int deleteCurso_2(@Param(value="instanceId") java.lang.String instanceId, @Param(value="relationId") java.lang.String relationId);

}
