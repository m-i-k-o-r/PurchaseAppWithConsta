package com.inline.purchase.controllers;

import com.inline.purchase.data.dto.LotDto;
import com.inline.purchase.data.form.LotForm;
import com.inline.purchase.services.LotService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/lot")
public class LotController {
    private final LotService lotService;

    @PostMapping()
    public LotDto createLot(@RequestBody LotForm form) {
        return lotService.createLot(form);
    }

    @GetMapping("/{id}")
    public LotDto getLot(@PathVariable long id) {
        return lotService.getLot(id);
    }

    @GetMapping()
    public List<LotDto> getAllLots() {
        return lotService.getLots();
    }

    @PutMapping("/{id}")
    public LotDto updateLot(@PathVariable long id,
                         @RequestBody LotForm form) {
        return lotService.updateLot(id, form);
    }

    @DeleteMapping("/{id}")
    public void deleteLot(@PathVariable long id) {
        lotService.deleteLot(id);
    }
}
