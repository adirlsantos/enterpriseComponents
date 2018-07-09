package app.entity;

import java.io.*;
import javax.persistence.*;
import java.util.*;
import javax.xml.bind.annotation.*;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonFilter;
import cronapi.rest.security.CronappSecurity;


/**
 * Classe que representa a tabela CLIENTE
 * @generated
 */
@Entity
@Table(name = "\"CLIENTE\"")
@XmlRootElement
@CronappSecurity
@JsonFilter("app.entity.Cliente")
public class Cliente implements Serializable {

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
  @Column(name = "nome", nullable = true, unique = false, length=255, insertable=true, updatable=true)
  
  private java.lang.String nome;

  /**
  * @generated
  */
  @Temporal(TemporalType.DATE)
  @Column(name = "nascimento", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.util.Date nascimento;

  /**
  * @generated
  */
  @Column(name = "tipo", nullable = true, unique = false, length=2, insertable=true, updatable=true)
  
  private java.lang.String tipo;

  /**
  * @generated
  */
  @Column(name = "cep", nullable = true, unique = false, length=12, insertable=true, updatable=true)
  
  private java.lang.String cep;

  /**
  * @generated
  */
  @Column(name = "cnpj", nullable = true, unique = false, length=16, insertable=true, updatable=true)
  
  private java.lang.String cnpj;

  /**
  * @generated
  */
  @Column(name = "telefone", nullable = true, unique = false, length=20, insertable=true, updatable=true)
  
  private java.lang.String telefone;

  /**
  * @generated
  */
  @Temporal(TemporalType.TIME)
  @Column(name = "horaNascimento", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.util.Date horaNascimento;

  /**
  * @generated
  */
  @Temporal(TemporalType.DATE)
  @Column(name = "cadastro", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.util.Date cadastro;

  /**
  * @generated
  */
  @Column(name = "satisfacao", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.Integer satisfacao;

  /**
  * @generated
  */
  @Column(name = "ativo", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.Boolean ativo;

  /**
  * @generated
  */
  @Column(name = "revendodor", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.Boolean revendodor;

  /**
  * @generated
  */
  @Column(name = "classificacao", nullable = true, unique = false, length=20, insertable=true, updatable=true)
  
  private java.lang.String classificacao;

  /**
  * @generated
  */
  @ManyToOne
  @JoinColumn(name="fk_municipio", nullable = true, referencedColumnName = "id", insertable=true, updatable=true)
  
  private Municipio municipio;

  /**
  * @generated
  */
  @Column(name = "ramoAtividade", nullable = true, unique = false, insertable=true, updatable=true)
  
  private java.lang.String ramoAtividade;

  /**
  * @generated
  */
  @ManyToOne
  @JoinColumn(name="fk_estado", nullable = true, referencedColumnName = "id", insertable=true, updatable=true)
  
  private Estado estado;

  /**
   * Construtor
   * @generated
   */
  public Cliente(){
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
  public Cliente setId(java.lang.String id){
    this.id = id;
    return this;
  }

  /**
   * Obtém nome
   * return nome
   * @generated
   */
  
  public java.lang.String getNome(){
    return this.nome;
  }

  /**
   * Define nome
   * @param nome nome
   * @generated
   */
  public Cliente setNome(java.lang.String nome){
    this.nome = nome;
    return this;
  }

  /**
   * Obtém nascimento
   * return nascimento
   * @generated
   */
  
  public java.util.Date getNascimento(){
    return this.nascimento;
  }

  /**
   * Define nascimento
   * @param nascimento nascimento
   * @generated
   */
  public Cliente setNascimento(java.util.Date nascimento){
    this.nascimento = nascimento;
    return this;
  }

  /**
   * Obtém tipo
   * return tipo
   * @generated
   */
  
  public java.lang.String getTipo(){
    return this.tipo;
  }

  /**
   * Define tipo
   * @param tipo tipo
   * @generated
   */
  public Cliente setTipo(java.lang.String tipo){
    this.tipo = tipo;
    return this;
  }

  /**
   * Obtém cep
   * return cep
   * @generated
   */
  
  public java.lang.String getCep(){
    return this.cep;
  }

  /**
   * Define cep
   * @param cep cep
   * @generated
   */
  public Cliente setCep(java.lang.String cep){
    this.cep = cep;
    return this;
  }

  /**
   * Obtém cnpj
   * return cnpj
   * @generated
   */
  
  public java.lang.String getCnpj(){
    return this.cnpj;
  }

  /**
   * Define cnpj
   * @param cnpj cnpj
   * @generated
   */
  public Cliente setCnpj(java.lang.String cnpj){
    this.cnpj = cnpj;
    return this;
  }

  /**
   * Obtém telefone
   * return telefone
   * @generated
   */
  
  public java.lang.String getTelefone(){
    return this.telefone;
  }

  /**
   * Define telefone
   * @param telefone telefone
   * @generated
   */
  public Cliente setTelefone(java.lang.String telefone){
    this.telefone = telefone;
    return this;
  }

  /**
   * Obtém horaNascimento
   * return horaNascimento
   * @generated
   */
  
  public java.util.Date getHoraNascimento(){
    return this.horaNascimento;
  }

  /**
   * Define horaNascimento
   * @param horaNascimento horaNascimento
   * @generated
   */
  public Cliente setHoraNascimento(java.util.Date horaNascimento){
    this.horaNascimento = horaNascimento;
    return this;
  }

  /**
   * Obtém cadastro
   * return cadastro
   * @generated
   */
  
  public java.util.Date getCadastro(){
    return this.cadastro;
  }

  /**
   * Define cadastro
   * @param cadastro cadastro
   * @generated
   */
  public Cliente setCadastro(java.util.Date cadastro){
    this.cadastro = cadastro;
    return this;
  }

  /**
   * Obtém satisfacao
   * return satisfacao
   * @generated
   */
  
  public java.lang.Integer getSatisfacao(){
    return this.satisfacao;
  }

  /**
   * Define satisfacao
   * @param satisfacao satisfacao
   * @generated
   */
  public Cliente setSatisfacao(java.lang.Integer satisfacao){
    this.satisfacao = satisfacao;
    return this;
  }

  /**
   * Obtém ativo
   * return ativo
   * @generated
   */
  
  public java.lang.Boolean getAtivo(){
    return this.ativo;
  }

  /**
   * Define ativo
   * @param ativo ativo
   * @generated
   */
  public Cliente setAtivo(java.lang.Boolean ativo){
    this.ativo = ativo;
    return this;
  }

  /**
   * Obtém revendodor
   * return revendodor
   * @generated
   */
  
  public java.lang.Boolean getRevendodor(){
    return this.revendodor;
  }

  /**
   * Define revendodor
   * @param revendodor revendodor
   * @generated
   */
  public Cliente setRevendodor(java.lang.Boolean revendodor){
    this.revendodor = revendodor;
    return this;
  }

  /**
   * Obtém classificacao
   * return classificacao
   * @generated
   */
  
  public java.lang.String getClassificacao(){
    return this.classificacao;
  }

  /**
   * Define classificacao
   * @param classificacao classificacao
   * @generated
   */
  public Cliente setClassificacao(java.lang.String classificacao){
    this.classificacao = classificacao;
    return this;
  }

  /**
   * Obtém municipio
   * return municipio
   * @generated
   */
  
  public Municipio getMunicipio(){
    return this.municipio;
  }

  /**
   * Define municipio
   * @param municipio municipio
   * @generated
   */
  public Cliente setMunicipio(Municipio municipio){
    this.municipio = municipio;
    return this;
  }

  /**
   * Obtém ramoAtividade
   * return ramoAtividade
   * @generated
   */
  
  public java.lang.String getRamoAtividade(){
    return this.ramoAtividade;
  }

  /**
   * Define ramoAtividade
   * @param ramoAtividade ramoAtividade
   * @generated
   */
  public Cliente setRamoAtividade(java.lang.String ramoAtividade){
    this.ramoAtividade = ramoAtividade;
    return this;
  }

  /**
   * Obtém estado
   * return estado
   * @generated
   */
  
  public Estado getEstado(){
    return this.estado;
  }

  /**
   * Define estado
   * @param estado estado
   * @generated
   */
  public Cliente setEstado(Estado estado){
    this.estado = estado;
    return this;
  }

  /**
   * @generated
   */
  @Override
  public boolean equals(Object obj) {
    if (this == obj) return true;
    if (obj == null || getClass() != obj.getClass()) return false;
    Cliente object = (Cliente)obj;
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
