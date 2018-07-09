package app.entity;

import java.io.*;
import javax.persistence.*;
import java.util.*;
import javax.xml.bind.annotation.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonFilter;
import cronapi.rest.security.CronappSecurity;


/**
 * Classe que representa a tabela TURMA
 * @generated
 */
@Entity
@Table(name = "\"TURMA\"")
@XmlRootElement
@CronappSecurity
@JsonFilter("app.entity.Turma")
public class Turma implements Serializable {

  /**
   * UID da classe, necessário na serialização
   * @generated
   */
  private static final long serialVersionUID = 1L;

  /**
   * @generated
   */
  @Id
  @Column(name = "id", nullable = false, insertable=true, updatable=true)
  private java.lang.String id = UUID.randomUUID().toString().toUpperCase();

  /**
  * @generated
  */
  @ManyToOne
  @JoinColumn(name="fk_instrutor", nullable = true, referencedColumnName = "id", insertable=true, updatable=true)
  
  private Instrutor instrutorSel;

  /**
  * @generated
  */
  @ManyToOne
  @JoinColumn(name="fk_curso", nullable = true, referencedColumnName = "id", insertable=true, updatable=true)
  
  private Curso cursoSel;

  /**
   * Construtor
   * @generated
   */
  public Turma(){
  }


  /**
   * Obtém id
   * return id
   * @generated
   */
  
  public java.lang.String getId(){
    return this.id;
  }

  /**
   * Define id
   * @param id id
   * @generated
   */
  public Turma setId(java.lang.String id){
    this.id = id;
    return this;
  }

  /**
   * Obtém instrutorSel
   * return instrutorSel
   * @generated
   */
  
  public Instrutor getInstrutorSel(){
    return this.instrutorSel;
  }

  /**
   * Define instrutorSel
   * @param instrutorSel instrutorSel
   * @generated
   */
  public Turma setInstrutorSel(Instrutor instrutorSel){
    this.instrutorSel = instrutorSel;
    return this;
  }

  /**
   * Obtém cursoSel
   * return cursoSel
   * @generated
   */
  
  public Curso getCursoSel(){
    return this.cursoSel;
  }

  /**
   * Define cursoSel
   * @param cursoSel cursoSel
   * @generated
   */
  public Turma setCursoSel(Curso cursoSel){
    this.cursoSel = cursoSel;
    return this;
  }

  /**
   * @generated
   */
  @Override
  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    Turma object = (Turma)obj;
    if (id != null ? !id.equals(object.id) : object.id != null) return false;
    return true;
  }

  /**
   * @generated
   */
  @Override
  public int hashCode() {
    int result = 1;
    result = 31 * result + ((id == null) ? 0 : id.hashCode());
    return result;
  }

}
