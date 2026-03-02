package advisory

type Severity string

const (
	SeverityCritical Severity = "critical"
	SeverityHigh     Severity = "high"
	SeverityMedium   Severity = "medium"
	SeverityLow      Severity = "low"
	SeverityInfo     Severity = "info"
)

type Advisory struct {
	ID         string   `json:"id"`
	Title      string   `json:"title"`
	Summary    string   `json:"summary"`
	PublishedAt string  `json:"publishedAt"`
	Country    string   `json:"country"`
	Government string   `json:"government"`
	Department string   `json:"department"`
	Severity   Severity `json:"severity"`
	SourceURL  string   `json:"sourceUrl"`
	Tags       []string `json:"tags"`
}
