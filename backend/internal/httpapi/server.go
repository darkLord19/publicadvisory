package httpapi

import (
	"encoding/json"
	"net/http"

	"github.com/publicadvisory/backend/internal/advisory"
)

type Server struct{}

func NewServer() *Server {
	return &Server{}
}

func (s *Server) Routes() http.Handler {
	mux := http.NewServeMux()
	mux.HandleFunc("GET /health", s.health)
	mux.HandleFunc("GET /api/advisories", s.listAdvisories)
	return mux
}

func (s *Server) health(w http.ResponseWriter, _ *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode(map[string]bool{"ok": true})
}

func (s *Server) listAdvisories(w http.ResponseWriter, _ *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	_ = json.NewEncoder(w).Encode([]advisory.Advisory{
		{
			ID:          "adv-1",
			Title:       "Civil Defense Alert: Cross-border drone activity",
			Summary:     "Authorities issued advisory for border communities to follow shelter protocols.",
			PublishedAt: "2026-02-25T08:30:00Z",
			Country:     "Ukraine",
			Government:  "Ministry of Defense",
			Department:  "Civil Defense",
			Severity:    advisory.SeverityHigh,
			SourceURL:   "https://example.gov/advisory/1",
			Tags:        []string{"security", "civil-defense"},
		},
	})
}
