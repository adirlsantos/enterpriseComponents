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
@Repository("TurmaDAO")
@Transactional(transactionManager="app-TransactionManager")
public interface TurmaDAO extends JpaRepository<Turma, java.lang.String> {

  /**
   * Obtém a instância de Turma utilizando os identificadores
   * 
   * @param id
   *          Identificador 
   * @return Instância relacionada com o filtro indicado
   * @generated
   */    
  @Query("SELECT entity FROM Turma entity WHERE entity.id = :id")
  public Turma findOne(@Param(value="id") java.lang.String id);

  /**
   * Remove a instância de Turma utilizando os identificadores
   * 
   * @param id
   *          Identificador 
   * @return Quantidade de modificações efetuadas
   * @generated
   */    
  @Modifying
  @Query("DELETE FROM Turma entity WHERE entity.id = :id")
  public void delete(@Param(value="id") java.lang.String id);



  /**
   * Foreign Key instrutorSel
   * @generated
   */
  @Query("SELECT entity FROM Turma entity WHERE entity.instrutorSel.id = :id")
  public Page<Turma> findTurmasByInstrutorSel(@Param(value="id") java.lang.String id, Pageable pageable);

  /**
   * Foreign Key cursoSel
   * @generated
   */
  @Query("SELECT entity FROM Turma entity WHERE entity.cursoSel.id = :id")
  public Page<Turma> findTurmasByCursoSel(@Param(value="id") java.lang.String id, Pageable pageable);

}
