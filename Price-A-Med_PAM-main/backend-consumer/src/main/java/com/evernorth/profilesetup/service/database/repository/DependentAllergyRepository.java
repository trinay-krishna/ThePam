package com.evernorth.profilesetup.service.database.repository;

import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.evernorth.profilesetup.service.database.entity.DependentAllergy;

import org.springframework.transaction.annotation.Transactional;

@Repository
public interface DependentAllergyRepository extends JpaRepository<DependentAllergy, Integer> { //
    DependentAllergy findByDependentID(String dependentID);
    @Transactional
    void deleteByDependentID(String dependentID);
}
