package com.inline.purchase.services;

import com.inline.purchase.data.form.LotForm;
import com.inline.purchase.data.dto.LotDto;
import com.inline.purchase.data.mapper.LotMapper;
import com.inline.purchase.exceptions.NotFoundException;
import com.inline.purchase.models.Lot;
import com.inline.purchase.repos.CustomerRepository;
import com.inline.purchase.repos.LotRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class LotService {
    private final LotRepository lotRepository;
    private final CustomerRepository customerRepository;

    public LotDto createLot(LotForm form) {
        Long customerCode = form.getCustomerCode() == null
                ? null
                : customerRepository.findById(form.getCustomerCode())
                    .orElseThrow(() -> new NotFoundException("Клиент с кодом " + form.getCustomerCode() + " не найден"))
                    .getCustomerCode();

        Lot l = Lot.builder()
                .lotName(form.getLotName())
                .lotDescription(form.getLotDescription())
                .price(form.getPrice())
                .currencyCode(form.getCurrencyCode())
                .ndsRate(form.getNdsRate())
                .customerCode(customerCode)
                .build();

        Lot nl = lotRepository.save(l);

        return LotMapper.INSTANCE.toDto(nl);
    }

    public LotDto getLot(long id) {
        return LotMapper.INSTANCE.toDto(lotRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Лот с этим ID не найден")));
    }

    public List<LotDto> getLots() {
        return LotMapper.INSTANCE.toDto(lotRepository.findAll());
    }

    public LotDto updateLot(long id, LotForm form) {
        Lot lot = lotRepository.findById(id)
                .orElseThrow(() -> new NotFoundException("Лот с этим ID не найден"));

        Long customerCode = form.getCustomerCode() == null
                ? null
                : customerRepository.findById(form.getCustomerCode())
                .orElseThrow(() -> new NotFoundException("Клиент с кодом " + form.getCustomerCode() + " не найден"))
                .getCustomerCode();

        lot.setLotName(form.getLotName());
        lot.setLotDescription(form.getLotDescription());
        lot.setPrice(form.getPrice());
        lot.setCurrencyCode(form.getCurrencyCode());
        lot.setNdsRate(form.getNdsRate());
        lot.setCustomerCode(customerCode);
        return LotMapper.INSTANCE.toDto(lotRepository.save(lot));
    }

    public void deleteLot(long id) {
        lotRepository.deleteById(id);
    }
}
