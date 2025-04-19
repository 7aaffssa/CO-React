import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Label = styled.label`
  margin-bottom: 5px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.8em;
  margin-bottom: 10px;
`;

const Form = () => { 
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    dateNaissance: '',
    password: '',
    confirmPassword: '',
    niveauEtudes: '',
    abonnement: '',
    commentaire: '',
    matieres: []
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      let newMatieres = [...formData.matieres];
      if (checked) {
        newMatieres.push(value);
      } else {
        newMatieres = newMatieres.filter(item => item !== value);
      }
      setFormData({ ...formData, matieres: newMatieres });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nom) newErrors.nom = 'Nom est requis';
    if (!formData.prenom) newErrors.prenom = 'Prénom est requis';
    if (!formData.dateNaissance) newErrors.dateNaissance = 'Date de naissance est requise';
    if (!formData.password) newErrors.password = 'Mot de passe est requis';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    if (!formData.niveauEtudes) newErrors.niveauEtudes = 'Niveau d\'études est requis';
    if (!formData.abonnement) newErrors.abonnement = 'Type d\'abonnement est requis';
    if (formData.matieres.length === 0) newErrors.matieres = 'Au moins une matière doit être sélectionnée';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Formulaire soumis avec succès:', formData);
    } else {
      console.log('Validation échouée');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>Nom:</Label>
      <Input type="text" name="nom" value={formData.nom} onChange={handleChange} />
      {errors.nom && <ErrorMessage>{errors.nom}</ErrorMessage>}

      <Label>Prénom:</Label>
      <Input type="text" name="prenom" value={formData.prenom} onChange={handleChange} />
      {errors.prenom && <ErrorMessage>{errors.prenom}</ErrorMessage>}

      <Label>Date de naissance:</Label>
      <Input type="date" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} />
      {errors.dateNaissance && <ErrorMessage>{errors.dateNaissance}</ErrorMessage>}

      <Label>Mot de passe:</Label>
      <Input type="password" name="password" value={formData.password} onChange={handleChange} />
      {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}

      <Label>Confirmation du mot de passe:</Label>
      <Input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
      {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}

      <Label>Niveau d'études:</Label>
      <Select name="niveauEtudes" value={formData.niveauEtudes} onChange={handleChange}>
        <option value="">Sélectionnez...</option>
        <option value="1er annee">1er annee </option>
        <option value="licence">2eme annee</option>

      </Select>
      {errors.niveauEtudes && <ErrorMessage>{errors.niveauEtudes}</ErrorMessage>}

      <Label>Type d'abonnement:</Label>
      <Label>
        <Input type="radio" name="abonnement" value="student" onChange={handleChange} /> Étudiant
      </Label>
      <Label>
        <Input type="radio" name="abonnement" value="premium" onChange={handleChange} /> Premium
      </Label>
      {errors.abonnement && <ErrorMessage>{errors.abonnement}</ErrorMessage>}

      <Label>Commentaire:</Label>
      <Input as="textarea" name="commentaire" value={formData.commentaire} onChange={handleChange} />

      <Label>Matière préférée:</Label>
      <Label>
        <Input type="checkbox" name="matieres" value="react" onChange={handleChange} /> React
      </Label>
      <Label>
        <Input type="checkbox" name="matieres" value="python" onChange={handleChange} /> Python
      </Label>
      <Label>
        <Input type="checkbox" name="matieres" value="scrum" onChange={handleChange} /> Scrum
      </Label>
      {errors.matieres && <ErrorMessage>{errors.matieres}</ErrorMessage>}

      <Button type="submit">Validé</Button>
    </FormContainer>
  );
};

export default Form; 