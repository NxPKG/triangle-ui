package server

import (
	"context"

	"github.com/khulnasoft/triangle-ui/backend/internal/server/nswatcher"
	"github.com/khulnasoft/triangle-ui/backend/pkg/logger"
)

func (srv *UIServer) CreateNSWatcher(
	ctx context.Context,
) (*nswatcher.Watcher, error) {
	return nswatcher.New().
		WithKubernetes(srv.k8s).
		WithLogger(logger.Sub("ns-watcher")).
		Unwrap()
}
