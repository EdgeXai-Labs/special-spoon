import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getProductBySlug, PRODUCTS } from '@/data/products'

type ProductPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }))
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug)

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.title} | Charan Food Tech`,
    description: product.shortDescription,
  }
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = PRODUCTS.filter(
    (item) => item.category === product.category && item.slug !== product.slug
  ).slice(0, 3)

  const details = product.details

  return (
    <main className="product-detail-page">
      <section className="section product-detail-hero">
        <div className="product-breadcrumbs">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/#products">Products</Link>
          <span>/</span>
          <span>{product.title}</span>
        </div>

        <div className="product-detail-grid">
          <div className="product-detail-media">
            <div className="product-detail-image-card">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>

          <div className="product-detail-content">
            {/* 1. Product name + 2. positioning statement */}
            <span className="product-detail-category">{product.category}</span>
            <h1 className="product-detail-title">{product.title}</h1>
            {details?.tagline && (
              <p className="product-detail-tagline">{details.tagline}</p>
            )}
            <p className="product-detail-description">{product.shortDescription}</p>

            {/* Hero quick specs */}
            {details?.heroSpecs && details.heroSpecs.length > 0 && (
              <dl className="product-hero-specs">
                {details.heroSpecs.map((spec) => (
                  <div key={spec.label} className="product-hero-spec">
                    <dt>{spec.label}</dt>
                    <dd>{spec.value}</dd>
                  </div>
                ))}
              </dl>
            )}

            {/* 12/13. CTA + brochure / video / datasheet */}
            <div className="product-detail-actions">
              <a href="/#contact" className="btn btn-primary">Request a Quote</a>
              {details?.brochureUrl && (
                <a href={details.brochureUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  Download Brochure
                </a>
              )}
              {details?.videoUrl && (
                <a href={details.videoUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  Watch Product Video
                </a>
              )}
              <Link href="/#products" className="btn btn-ghost">Back to Products</Link>
            </div>
          </div>
        </div>
      </section>

      {details ? (
        <>
          {/* SECTION 2 — Product Overview + Key Metrics */}
          <section className="section product-overview-section">
            <div className="product-overview-grid">
              <div className="product-overview-copy">
                <h2>{details.overviewHeadline ?? `About the ${product.title}`}</h2>
                <p>{details.overview ?? product.overview}</p>
              </div>

              {details.keyMetrics && details.keyMetrics.length > 0 && (
                <div className="product-metric-grid">
                  {details.keyMetrics.map((metric) => (
                    <div key={metric.label} className="product-metric-card">
                      <strong>{metric.value}</strong>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* SECTION 3 — Key Features */}
          <section className="section product-spec-section">
            <div className="product-section-heading">
              <h2>Key Features</h2>
            </div>
            <div className="product-feature-grid">
              {(details.featureCards && details.featureCards.length > 0
                ? details.featureCards
                : details.keyFeatures.map((f) => ({ title: f, description: '' }))
              ).map((item) => (
                <div key={item.title} className="product-feature-card">
                  <span className="product-feature-check">✓</span>
                  <div className="product-feature-body">
                    <strong>{item.title}</strong>
                    {item.description && <p>{item.description}</p>}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Working Process */}
          {details.workingProcess.length > 0 && (
            <section className="section product-process-section">
              <div className="product-section-heading">
                <h2>Working Process</h2>
              </div>
              <div className="product-process-flow">
                {details.workingProcess.map((stage, index) => (
                  <div key={stage.step} className="product-process-step">
                    <div className="product-process-number">{String(index + 1).padStart(2, '0')}</div>
                    <h3>{stage.step}</h3>
                    {stage.description && <p>{stage.description}</p>}
                    {index < details.workingProcess.length - 1 && (
                      <span className="product-process-arrow" aria-hidden="true">→</span>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SECTION 5 — Applications / Products Handled */}
          <section className="section product-applications-section">
            <div className="product-section-heading">
              <h2>Applications / Products Handled</h2>
              <p className="product-section-subtitle">
                Products this machine is commonly configured to produce.
              </p>
            </div>
            <div className="product-applications-grid">
              {details.applications.map((item) => (
                <div key={item} className="product-application-card">
                  <span className="product-application-icon" aria-hidden="true">●</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION 6 — Technical Specifications */}
          {details.specTable && (
            <section className="section product-techspec-section">
              <div className="product-section-heading">
                <h2>Technical Specifications</h2>
              </div>
              <div className="product-spec-table-wrapper">
                <table className="product-spec-table">
                  <thead>
                    <tr>
                      {details.specTable.columns.map((col) => (
                        <th key={col}>{col}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {details.specTable.rows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} data-label={details.specTable?.columns[cellIndex]}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {details.specTable.note && (
                <p className="product-spec-note">{details.specTable.note}</p>
              )}
            </section>
          )}

          {/* SECTION 8 — Available Models / Configurations */}
          {details.models && details.models.length > 0 && (
            <section className="section product-models-section">
              <div className="product-section-heading">
                <h2>Available Models / Configurations</h2>
                <p className="product-section-subtitle">
                  Choose the configuration that matches your required output.
                </p>
              </div>
              <div className="product-models-grid">
                {details.models.map((model) => (
                  <div key={model} className="product-model-card">
                    <strong>{model}</strong>
                    <span>Configuration</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* SECTIONS 9-11 — Construction, Performance Benefits, Optional Attachments */}
          {(details.construction || details.performanceBenefits) && (
            <section className="section product-detail-sections">
              {details.construction && (
                <div className="product-detail-panel">
                  <h2>Construction / Material</h2>
                  <ul>
                    {details.construction.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {details.performanceBenefits && (
                <div className="product-detail-panel">
                  <h2>Performance Benefits</h2>
                  <ul>
                    {details.performanceBenefits.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {details.optionalAttachments && (
                <div className="product-detail-panel">
                  <h2>Optional Attachments / Customization</h2>
                  <ul>
                    {details.optionalAttachments.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          )}

          {/* SECTION 7 — Why Choose This Machine */}
          {details.whyChoose && details.whyChoose.length > 0 && (
            <section className="section product-why-section">
              <div className="product-section-heading">
                <h2>Why Choose This Machine?</h2>
                <p className="product-section-subtitle">
                  Operational advantages that impact your production floor.
                </p>
              </div>
              <div className="product-why-grid">
                {details.whyChoose.map((item) => (
                  <div key={item.title} className="product-why-card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Performance Positioning Banner */}
          {details.performancePositioning && (
            <section className="section product-positioning-banner">
              <p>{details.performancePositioning}</p>
            </section>
          )}

          {/* SECTION 13 — Brochure / Video / Datasheet */}
          {(details.brochureUrl || details.videoUrl || details.datasheetUrl) && (
            <section className="section product-resources-section">
              <div className="product-section-heading">
                <h2>Product Brochure, Video &amp; Datasheet</h2>
                <p className="product-section-subtitle">
                  Download detailed documentation or watch the machine in operation.
                </p>
              </div>
              <div className="product-resources-grid">
                {details.brochureUrl && (
                  <a href={details.brochureUrl} className="product-resource-card" target="_blank" rel="noopener noreferrer">
                    <span className="product-resource-icon" aria-hidden="true">📄</span>
                    <strong>Product Brochure</strong>
                    <span>Full specification brochure (PDF)</span>
                  </a>
                )}
                {details.videoUrl && (
                  <a href={details.videoUrl} className="product-resource-card" target="_blank" rel="noopener noreferrer">
                    <span className="product-resource-icon" aria-hidden="true">▶</span>
                    <strong>Product Video</strong>
                    <span>See the machine in operation</span>
                  </a>
                )}
                {details.datasheetUrl && (
                  <a href={details.datasheetUrl} className="product-resource-card" target="_blank" rel="noopener noreferrer">
                    <span className="product-resource-icon" aria-hidden="true">📊</span>
                    <strong>Technical Datasheet</strong>
                    <span>Detailed technical parameters</span>
                  </a>
                )}
              </div>
            </section>
          )}

          {/* SECTION 12 — Enquiry / Get Quote CTA */}
          <section className="section product-enquiry-cta">
            <div className="product-enquiry-card">
              <div className="product-enquiry-text">
                <h2>{details.ctaHeadline ?? 'Planning a New Food Production Line?'}</h2>
                <p>
                  {details.ctaSubtext ??
                    'Tell us your required product, production capacity and automation level.'}
                </p>
              </div>
              <div className="product-enquiry-actions">
                <a href="/#contact" className="btn btn-primary">Request a Quote →</a>
                <a href="/#contact" className="btn btn-secondary">Talk to an Engineer →</a>
              </div>
            </div>
          </section>
        </>
      ) : (
        <section className="section product-detail-sections">
          <div className="product-detail-panel">
            <h2>Key Highlights</h2>
            <ul>
              {product.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="product-detail-panel">
            <h2>Typical Applications</h2>
            <ul>
              {product.applications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="product-detail-panel product-detail-panel-note">
            <h2>Detail Page Ready</h2>
            <p>
              This page is structured so individual machine specifications, capacity information, videos,
              galleries and technical details can be expanded later for this product.
            </p>
          </div>
        </section>
      )}

      {relatedProducts.length > 0 && (
        <section className="section product-related-section">
          <div className="section-header">
            <h2 className="section-title">Related Products</h2>
            <p className="section-subtitle">Explore more machines from the same category.</p>
          </div>

          <div className="product-related-grid">
            {relatedProducts.map((item) => (
              <Link key={item.slug} href={`/products/${item.slug}`} className="product-related-card">
                <div className="product-related-image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className="product-related-content">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                  <p>{item.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  )
}