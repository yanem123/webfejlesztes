package com.beadando.Music.Database.Data.Repository;

import com.beadando.Music.Database.Data.Entity.ZeneEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ZeneRepository extends JpaRepository<ZeneEntity, Long> {
}
