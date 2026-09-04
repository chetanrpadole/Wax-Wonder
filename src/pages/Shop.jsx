import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const occasionParam = searchParams.get('occasion');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
  const [sortBy, setSortBy] = useState('featured');

  // Sync state when URL params change
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    } else {
      setSelectedCategory('All');
    }
  }, [categoryParam]);

  const handleCategorySelect = (cat) => {
    setSelectedCategory(cat);
    if (cat === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    // clear occasion filter when choosing a category
    searchParams.delete('occasion');
    setSearchParams(searchParams);
  };

  const handleClearOccasion = () => {
    searchParams.delete('occasion');
    setSearchParams(searchParams);
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        const matchesCategory =
          selectedCategory === 'All' || product.category === selectedCategory;

        // Occasion filter (from URL)
        const matchesOccasion = occasionParam
          ? product.occasion && product.occasion.includes(occasionParam)
          : true;

        // Search query filter
        const matchesSearch =
          searchQuery === '' ||
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesOccasion && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
        return 0; // 'featured' keeps original order
      });
  }, [selectedCategory, occasionParam, searchQuery, sortBy]);

  return (
    <div className="shop-page" id="shop-page">
      <div className="container">
        {/* Header */}
        <header className="shop-header">
          <span className="tag tag--gold" style={{ marginBottom: '0.5rem' }}>
            <Sparkles size={13} /> Handcrafted Collection
          </span>
          <h1>Our Creations</h1>
          <div className="divider" />
          <p>Explore handcrafted candles, curated gift hampers, and artisanal keepsakes.</p>
        </header>

        {/* Occasion Banner if active */}
        {occasionParam && (
          <div className="shop-active-badge">
            <span>Filtering by Occasion: <strong>{occasionParam}</strong></span>
            <button onClick={handleClearOccasion} type="button">Clear Occasion Filter</button>
          </div>
        )}

        {/* Search & Sort Controls */}
        <div className="shop-controls">
          <div className="shop-search">
            <Search size={18} />
            <input
              type="text"
              className="shop-search__input"
              placeholder="Search candles, hampers, scents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search products"
            />
          </div>

          <div className="shop-sort">
            <SlidersHorizontal size={16} />
            <label htmlFor="shop-sort-select">Sort by:</label>
            <select
              id="shop-sort-select"
              className="shop-sort__select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="shop-filters" role="group" aria-label="Product Categories">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`shop-filter-btn ${selectedCategory === cat ? 'shop-filter-btn--active' : ''}`}
              onClick={() => handleCategorySelect(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Status Count */}
        <p className="shop-status">
          Showing <strong>{filteredProducts.length}</strong> handcrafted {filteredProducts.length === 1 ? 'item' : 'items'}
        </p>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="shop-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="shop-empty">
            <h3>No products found</h3>
            <p>We couldn&apos;t find anything matching your search criteria. Try a different query or reset filters.</p>
            <button
              type="button"
              className="btn btn--primary btn--sm"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                handleClearOccasion();
              }}
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
