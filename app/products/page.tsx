import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { PRODUCTS, PRODUCT_CATEGORIES } from '@/data/products'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Products | Charan Food Tech',
  description: 'Explore our complete range of premium food processing machinery - Fryers, Cutting, Forming, Processing, and Automation solutions.',
}

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      <main className="products-page">
      {/* Hero Section */}
      <section className="products-hero">
        <div className="container">
          <div className="products-hero-content">
            <h1 className="products-hero-title">Our Product Range</h1>
            <p className="products-hero-subtitle">
              Premium food processing machinery engineered for performance, reliability, and scalability
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-catalog">
        <div className="container">
          {/* All Products */}
          <div className="category-section">
            <div className="category-header">
              <h2 className="category-title">All Products</h2>
              <span className="category-count">{PRODUCTS.length} Products</span>
            </div>
            <div className="products-grid">
              {PRODUCTS.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="product-card"
                >
                  <div className="product-card-image">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: 'contain' }}
                    />
                    <span className="product-card-category">{product.category}</span>
                  </div>
                  <div className="product-card-content">
                    <h3 className="product-card-title">{product.title}</h3>
                    <p className="product-card-description">{product.shortDescription}</p>
                    <div className="product-card-footer">
                      <span className="product-card-link">
                        View Details
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Products by Category */}
          {PRODUCT_CATEGORIES.filter(cat => cat !== 'All').map(category => {
            const categoryProducts = PRODUCTS.filter(p => p.category === category)
            if (categoryProducts.length === 0) return null

            return (
              <div key={category} className="category-section">
                <div className="category-header">
                  <h2 className="category-title">{category}</h2>
                  <span className="category-count">{categoryProducts.length} Products</span>
                </div>
                <div className="products-grid">
                  {categoryProducts.map((product) => (
                    <Link
                      key={product.slug}
                      href={`/products/${product.slug}`}
                      className="product-card"
                    >
                      <div className="product-card-image">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      <div className="product-card-content">
                        <h3 className="product-card-title">{product.title}</h3>
                        <p className="product-card-description">{product.shortDescription}</p>
                        <div className="product-card-footer">
                          <span className="product-card-link">
                            View Details
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="products-cta">
        <div className="container">
          <div className="products-cta-content">
            <h2>Can't Find What You're Looking For?</h2>
            <p>We specialize in custom machinery solutions tailored to your production needs</p>
            <div className="products-cta-actions">
              <Link href="/#contact" className="btn btn-primary">
                Request Custom Solution
              </Link>
              <Link href="/#contact" className="btn btn-secondary">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      </main>
      <Footer />
    </>
  )
}
