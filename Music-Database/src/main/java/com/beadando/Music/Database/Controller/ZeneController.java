package com.beadando.Music.Database.Controller;

import com.beadando.Music.Database.Data.Entity.ZeneEntity;
import com.beadando.Music.Database.Data.Repository.ZeneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/songs")
public class ZeneController {

    @Autowired
    private ZeneRepository songRepository;

    @GetMapping
    public List<ZeneEntity> getAllSongs() {
        return songRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ZeneEntity> getSongById(@PathVariable Long id) {
        return songRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ZeneEntity createSong(@RequestBody ZeneEntity zene) {
        return songRepository.save(zene);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ZeneEntity> updateSong(@PathVariable Long id, @RequestBody ZeneEntity songDetails) {
        return songRepository.findById(id).map(song -> {
            song.setTitle(songDetails.getTitle());
            song.setArtist(songDetails.getArtist());
            song.setAlbum(songDetails.getAlbum());
            ZeneEntity updatedSong = songRepository.save(song);
            return ResponseEntity.ok(updatedSong);
        }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public void deleteSong(@PathVariable("id") long id){
        songRepository.deleteById(id);
    }
}
