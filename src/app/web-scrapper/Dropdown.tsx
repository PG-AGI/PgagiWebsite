// Dropdown.tsx

'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronUp, X, Loader2 } from 'lucide-react';
import styles from './Dropdown.module.scss';

interface DropdownProps {
  title: string;
  items: string[];
  onScrape: (selected: string[]) => void; // Updated to accept selected items
}

const Dropdown: React.FC<DropdownProps> = ({ title, items, onScrape }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    // Reset selection when items change
    setSelectedItems([]);
    setSelectAll(false);
  }, [items]);

  const toggleSelectAllItems = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems([...items]);
    }
    setSelectAll(!selectAll);
  };

  const toggleItemSelection = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
      setSelectAll(false);
    } else {
      const newSelectedItems = [...selectedItems, item];
      setSelectedItems(newSelectedItems);
      if (newSelectedItems.length === items.length) {
        setSelectAll(true);
      }
    }
  };

  const handleScrapeClick = () => {
    onScrape(selectedItems);
    setIsOpen(false); // Optionally close dropdown after scraping
  };

  return (
    <div className={styles.dropdownWrapper} ref={dropdownRef}>
      <div className={styles.dropdownButton} onClick={toggleDropdown}>
        <span>{title}</span>
        {isOpen ? <ChevronUp className={styles.chevronIcon} /> : <ChevronDown className={styles.chevronIcon} />}
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader}>
            <div className={styles.selectAll}>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={toggleSelectAllItems}
              />
              <span>Select All</span>
            </div>
            <button 
              className={styles.scrapeButton} 
              onClick={handleScrapeClick}
              disabled={selectedItems.length === 0} 
            >
              Scrape
            </button>
            <X
              className={styles.closeIcon}
              onClick={() => setIsOpen(false)}
            />
          </div>

          <div className={styles.pageList}>
            {items.length > 0 ? (
              items.map((item, index) => (
                <div key={index} className={styles.pageItem}>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item)}
                    onChange={() => toggleItemSelection(item)}
                  />
                  <span>{item}</span>
                </div>
              ))
            ) : (
              <p className={styles.noItems}>No subpages available.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
